import { exec as fsExec } from 'child_process';

/**
 * Executes a command in the CLI.
 * @param Command to run.
 * @returns Standard output from the command.
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
