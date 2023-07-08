import {
  absoluteConfigPath,
  linkFiles,
  logFail,
  logInfo,
  logSuccess
} from '../functions/index';
import { Command } from '../models/index';

export type SymlinkConfig = { file: string; link: string; }[];

/** set up symlinks specified by the symlink.json files in this directory */
export const symlink: Command<SymlinkConfig> = async function (
  config,
  linkConfigs
): Promise<void> {
  logInfo("Configuring symlinks");

  if (!(linkConfigs instanceof Array)) {
    logFail('Command with key "symlink-setup" must have an array value.');
  }
  const invalidIndex = linkConfigs.findIndex(config =>
    typeof config?.file !== 'string'
    || config.file === ''
    || typeof config?.link !== 'string'
    || config.link === ''
  );
  if (invalidIndex >= 0) {
    logFail(
      `Command with key "symlink-setup" has an invalid element at index "${invalidIndex}".`
      + 'Please provide a valid "file" and "link" property.'
    );
  }

  await linkFiles(linkConfigs.map(({ file, link }) => ({
    destination: absoluteConfigPath(config, link),
    source: absoluteConfigPath(config, file)
  })));

  logSuccess("Symlink configuration complete");
}