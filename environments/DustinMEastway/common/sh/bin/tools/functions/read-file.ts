import { readFile as fsReadFile, PathLike } from 'fs';

/**
 * Reads contents of a file.
 * @param {path} Path to a file to read (if a URL is provided, it must use the `file:` protocol).
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
