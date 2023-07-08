import { absoluteConfigPath, logInfo, logSuccess, makeDirectory } from '../functions/index';
import { Command } from '../models/index';

export const mkdir: Command<string | string[]> = async (
  config,
  paths
) => {
  paths = ((typeof paths === 'string') ? [paths] : paths);
  for (let path of paths) {
    path = absoluteConfigPath(config, path);
    logInfo(`Creating directory ${path}.`);
    await makeDirectory(path, { recursive: true });
    logSuccess(`${path} created.`);
  }
}
