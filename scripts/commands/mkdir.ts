import { absoluteConfigPath, logInfo, logSuccess, makeDirectory } from '../functions/index';
import { Command, EnvironmentConfig } from '../models/index';

export const mkdir: Command = async (
  config: EnvironmentConfig,
  paths: string | string[]
) => {
  paths = ((typeof paths === 'string') ? [paths] : paths);
  for (let path of paths) {
    path = absoluteConfigPath(config, path);
    logInfo(`Creating directory ${path}.`);
    await makeDirectory(path, { recursive: true });
    logSuccess(`${path} created.`);
  }
}
