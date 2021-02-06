import { absoluteConfigPath, makeDirectory } from '../functions/index';
import { Command, EnvironmentConfig } from '../models/index';

export const mkdir: Command = function (config: EnvironmentConfig, path: string): Promise<string> {
	return makeDirectory(absoluteConfigPath(config, path), { recursive: true });
}
