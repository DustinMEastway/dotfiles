import { exec as fsExec } from 'child_process';
import {
	access as fsAccess,
	constants,
	exists as fsExists,
	link as fsLink,
	lstat as fsLstat,
	realpath as fsRealpath,
	rename as fsRename,
	rmdir,
	symlink as fsSymlink,
	unlink,
	PathLike,
	Stats
} from 'fs';
import { homedir } from 'os';
import { resolve } from 'path';

/** converts the provided path into an absolute path (start with '~' to access the home directory) */
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
 * @param path to a file or directory
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
 * @param path to a file or directory
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
 * @param path to a file or directory
 */
export function exists(path: PathLike): Promise<any> {
	return new Promise(resolve => {
		fsExists(path, pathExists => resolve(pathExists));
	});
}

/**
 * tests if the file specified by path can be accessed and is a file opposed to a directory
 * @param path to a file or directory
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
 * return the canonicalized absolute pathname
 * @param path to a file (if a URL is provided, it must use the `file:` protocol)
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
 * change the name or location of a file or directory
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
			rmdir(path, error => {
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
