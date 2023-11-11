import { writeFile as fsWriteFile, PathLike } from 'fs';

/**
 * Asynchronously writes data to a file, replacing the file if it already exists.
 * @param {path} A path to a file. If a URL is provided, it must use the `file:` protocol.
 * @param {content} The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string.
 */
export function writeFile(path: PathLike, content: string): Promise<void> {
  return new Promise((resolve, reject) => {
    fsWriteFile(path, content, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
