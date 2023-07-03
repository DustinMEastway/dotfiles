import { dirname } from 'path';
import {
  absoluteConfigPath,
  exec,
  isDirectory,
  logFail,
  logInfo,
  logSuccess,
  makeDirectory
} from '../functions/index';
import { Command } from '../models/index';

export interface GitCloneConfig {
  args?: string;
  items: {
    path: string;
    url: string;
  }[];
}

export const gitClone: Command<GitCloneConfig> = async (
  envConfig,
  gitCloneConfig
) => {
  const { args, items } = gitCloneConfig || {}
  if (!(items instanceof Array) || !items.length) {
    logFail('No items were supplied to the git-clone command.');
  } else if (items.some((item) => {
    return (
      !item
      || typeof item.path !== 'string'
      || typeof item.url !== 'string'
    );
  })) {
    logFail('Invalid item(s) were supplied to the git-clone command.');
  }

  try {
    const startDirectory = process.cwd();
    for (const { path: file, url } of items) {
      const path = absoluteConfigPath(envConfig, file);
      if (await isDirectory(path)) {
        logSuccess(`Skipped cloning ${url}.`);
        continue;
      }

      logInfo(`Cloning ${url}.`);
      const parentPath = dirname(path);
      await makeDirectory(parentPath, { recursive: true });
      process.chdir(parentPath);
      await exec(
        [
          'git clone',
          (args) ? args : '',
          url,
          path.slice(parentPath.length + 1)
        ].filter((text) => !!text).join(' '),
        { skipStdError: true }
      );
      logSuccess(`Cloned ${url}.`);
    }
    process.chdir(startDirectory);
  } catch (error) {
    logFail(`git-clone failed: ${error}`);
  }
}