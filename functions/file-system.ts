import { exec as fsExec } from 'child_process';
import {
	access as fsAccess,
	constants,
	exists as fsExists,
	lstat as fsLstat,
	PathLike,
	Stats
} from 'fs';

/**
 * tests a user's permissions for the file specified by path (fails if path does not exist @see canAccess returns false instead)
 * @param path to a file or directory
 */
export function access(path: PathLike, mode: number): Promise<null> {
	return new Promise((resolve, reject) => {
		fsAccess(path, mode, error => {
			if (error) {
				reject(error);
			} else {
				resolve(null);
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
