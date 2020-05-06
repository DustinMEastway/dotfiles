import { exec as fsExec } from 'child_process';
import {
	access as fsAccess,
	constants,
	exists as fsExists,
	link as fsLink,
	lstat as fsLstat,
	readFile as fsReadFile,
	realpath as fsRealpath,
	rename as fsRename,
	rmdir as rmDirectory,
	readdir as fsReadDirectory,
	symlink as fsSymlink,
	unlink,
	PathLike,
	Stats
} from 'fs';
import { homedir } from 'os';
import { resolve } from 'path';

import { asyncFilter, asyncForEach, asyncMap } from './array';
import { PromiseOrValue } from './types';

/**
 * converts the provided path into an absolute path (start with '~' to access the home directory)
 *
 * @notes
 * - use @see realpath if you need to resolve symlinks
 */
export function absolutePath(path: string): string {
	path = path.trim();

	// resolve '~' into the home directory path
	if (path === '~' || path.startsWith('~/')) {
		path = `${homedir()}/${path.substring(1)}`;
	}

	return resolve(path);
}

/**
 * tests a user's permissions for the file specified by path (fails if path does not exist @see canAccess returns false instead)
 * @param path to a directory or file
 */
export function access(path: PathLike, mode: number): Promise<void> {
	return new Promise((resolve, reject) => {
		fsAccess(path, mode, error => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

/**
 * tests if the file specified by path exists and can be accessed
 * @param path to a directory or file
 * @param mode to check for (e.g. read, write, execute) (default: @see constants R_OK)
 */
export async function canAccess(path: PathLike, mode: number = constants.R_OK): Promise<boolean> {
	try {
		return (await exists(path)) && (await access(path, mode)) == null;
	} catch (error) {
		return false;
	}
}

/**
 * executes a command in the CLI
 * @param command to run
 * @returns standard output from the command
 */
export function exec(command: string): Promise<string> {
	return new Promise((resolve, reject) => {
		fsExec(command, (error, stdout, stderr) => {
			if (error || stderr) {
				reject(error || stderr);
			} else {
				stdout = (stdout.endsWith('\n')) ? stdout.substr(0, stdout.length - 1) : stdout;

				resolve(stdout || '');
			}
		});
	});
}

/**
 * tests if the file specified by path exists
 * @param path to a directory or file
 */
export function exists(path: PathLike): Promise<any> {
	return new Promise(resolve => {
		fsExists(path, pathExists => resolve(pathExists));
	});
}

/** configuration to change the behavior of @see searchDirectory */
export interface SearchDirectoryConfig {
	/** @property directoryFilter to determine which sub-directories to get items from */
	directoryFilter?: DirectoryItemFilter;
	/** @property filter to determine which directory items to keep (directories & files) */
	itemFilter?: DirectoryItemFilter;
}

/** can be used to filter out a directory item */
export type DirectoryItemFilter = RegExp | ((item: DirectoryItem) => PromiseOrValue<boolean>);

/** information describing an item (directory or file) in a directory */
export interface DirectoryItem {
	directoryPath: string;
	path: string;
	stats: Stats;
}

/** search a directory for items it contains */
export async function searchDirectory(directoryPath: string, config?: SearchDirectoryConfig): Promise<DirectoryItem[]> {
	if (!(await isDirectory(directoryPath))) {
		// return if no directory is found
		return [];
	}

	const { itemFilter, directoryFilter } = config || {};
	const filterItem = async (item: DirectoryItem, filter: DirectoryItemFilter) => {
		return (typeof filter === 'function') ? await filter(item) : filter == null || filter.test(item.path);
	};

	// create items for everything in the directory
	let directoryItems: DirectoryItem[] = await asyncMap(await readDirectory(directoryPath), async itemPath => {
		const path = `${directoryPath}/${itemPath}`.replace(/\/+/g, '/');

		return { directoryPath, path, stats: await lstat(path) };
	});

	// filter out items that are not wanted
	const filteredItems = await asyncFilter(directoryItems, async item => await filterItem(item, itemFilter));

	// get sub directory items (which are already filtered)
	let subItems: DirectoryItem[] = [];
	await asyncForEach(directoryItems, async item => {
		const { path, stats } = item;
		if (stats.isDirectory() && (await filterItem(item, directoryFilter))) {
			subItems = subItems.concat(await searchDirectory(path, config));
		}
	});

	return filteredItems.concat(subItems);
}

/**
 * read a directory to get the names of all the items within
 * @param path to a directory to read (if a URL is provided, it must use the `file:` protocol)
 */
export function readDirectory(path: PathLike): Promise<string[]> {
	return new Promise((resolve, reject) => {
		fsReadDirectory(path, (error, files) => {
			if (error) {
				reject(error);
			} else {
				resolve(files);
			}
		});
	});
}

/**
 * tests if the specified path can be accessed and is a directory opposed to a file
 * @param path to a directory or file
 */
export async function isDirectory(path: PathLike): Promise<boolean> {
	return (await canAccess(path)) && (await lstat(path)).isDirectory();
}

/**
 * tests if the specified path can be accessed and is a file opposed to a directory
 * @param path to a directory or file
 */
export async function isFile(path: PathLike): Promise<boolean> {
	return (await canAccess(path)) && (await lstat(path)).isFile();
}

/** test if current system is running Linux OS */
export async function isLinuxOs(): Promise<boolean> {
	return (await exec('uname -s')).startsWith('Linux');
}

/** test if current system is running Mac OS */
export async function isMacOs(): Promise<boolean> {
	return (await exec('uname -s')) == 'Darwin';
}

/**
 * create a new link (also known as a hard link) to an existing file
 * @param source path of a file (if a URL is provided, it must use the `file:` protocol)
 * @param destination path to a file (if a URL is provided, it must use the `file:` protocol0
 */
export function link(source: string, destination: string): Promise<void> {
	return new Promise((resolve, reject) => {
		fsLink(source, destination, error => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

/**
 * get file status (does not dereference symbolic links)
 * @param path to a file
 */
export function lstat(path: PathLike): Promise<Stats> {
	return new Promise((resolve, reject) => {
		fsLstat(path, (error, stats) => {
			if (error) {
				reject(error);
			} else {
				resolve(stats);
			}
		});
	});
}

/**
 * reads the entire contents of a file
 * @param path to a file to read (if a URL is provided, it must use the `file:` protocol)
 *
 * @notes
 * - URL support is experimental for the path argument
 * - If a file descriptor is provided, the underlying file will not be closed automatically
 */
export function readFile(path: PathLike): Promise<string> {
	return new Promise((resolve, reject) => {
		fsReadFile(path, 'utf8', (error, data) => {
			if (error) {
				reject(error);
			} else {
				resolve(data);
			}
		});
	});
}

/**
 * return the canonicalized absolute pathname (resolves symlinks)
 * @param path to a file (if a URL is provided, it must use the `file:` protocol)
 *
 * @notes
 * - Start with '~' in a string path to access the home directory
 * - Use @see absolutePath if you do not want symlinks resolved
 */
export function realpath(path: PathLike): Promise<string> {
	return new Promise((resolve, reject) => {
		path = (typeof path === 'string') ? absolutePath(path) : path;

		fsRealpath(path, (error, resolvedPath) => {
			if (error) {
				reject(error);
			} else {
				resolve(resolvedPath);
			}
		});
	});
}

/**
 * change the name or location of a directory or file
 * @param source path to the file that should be renamed (if a URL is provided, it must use the `file:` protocol)
 * @param destination path where the source should be moved to (if a URL is provided, it must use the `file:` protocol)
 *
 * @notes
 * - URL support is experimental for the source and destination arguments
 */
export function rename(source: PathLike, destination: PathLike): Promise<void> {
	return new Promise((resolve, reject) => {
		fsRename(source, destination, error => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

/**
 * removes a directory/file/symlink from the system
 * @param path to a file to delete (if a URL is provided, it must use the `file:` protocol)
 */
export async function remove(path: PathLike): Promise<void> {
	const removeFile = await isFile(path);

	return new Promise((resolve, reject) => {
		if (removeFile) {
			unlink(path, error => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		} else {
			rmDirectory(path, error => {
				if (error) {
					reject(error);
				} else {
					resolve();
				}
			});
		}
	});
}

/**
 * create a new symbolic link to an existing file.
 * @param source path of an existing file (if a URL is provided, it must use the `file:` protocol)
 * @param destination path to the new symlink (if a URL is provided, it must use the `file:` protocol)
 * @param type set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms)
 *
 * @notes
 * - When using `'junction'` for the `type` argument, the `target` argument will automatically be normalized to an absolute path
 */
export function symlink(source: PathLike, destination: PathLike, type?: symlink.Type): Promise<void> {
	return new Promise(async (resolve, reject) => {
		fsSymlink(source, destination, type, error => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

export namespace symlink {
	export type Type = fsSymlink.Type;
}
