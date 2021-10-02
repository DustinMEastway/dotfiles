import { exec, logFail, logInfo, logSuccess } from '../functions/index';
import { Command } from '../models/index';

export interface WriteDefaultsConfig {
  [domain: string]: {
    [key: string]: number | string;
  };
}

export const writeDefaults: Command = async (_, config: WriteDefaultsConfig) => {
  if (!Object.keys(config || {}).length) {
    logFail('No domains were supplied to the write-defaults command.');
  }

  try {
    logInfo(`Writing defaults`);
    for (const domainKey in config) {
      const domain = config[domainKey];
      for (const key in domain) {
        const value = domain[key];
        await exec(`defaults write "${domainKey}" "${key}" "${value}"`);
      }
    }
    logSuccess('Finished writing defaults');
  } catch (error) {
    logFail(`Writing defaults failed: ${error}`);
  }
}
