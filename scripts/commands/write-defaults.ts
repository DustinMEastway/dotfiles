import { exec, logFail, logInfo, logSuccess } from '../functions/index';
import { Command } from '../models/index';

export type WriteDefaultsValue = boolean | number | string | WriteDefaultsValue[];

export interface WriteDefaultsConfig {
  [domain: string]: {
    [key: string]: WriteDefaultsValue;
  };
}

export const writeDefaults: Command = async (_, config: WriteDefaultsConfig) => {
  if (!Object.keys(config || {}).length) {
    logFail('No domains were supplied to the write-defaults command.');
  }

  try {
    logInfo(`Writing defaults`);
    for (const [domainKey, domain] of Object.entries(config)) {
      for (const [key, value] of Object.entries(domain)) {
        if (value instanceof Array) {
          const stringValue = value.map((v) => stringifyValue(v)).join(', ');
          await exec(`defaults write "${domainKey}" "${key}" -array "${stringValue}"`);
        } else {
          let valueArguments = `"${value}"`;
          if (typeof value === 'boolean') {
            valueArguments = `-bool ${value}`;
          }

          await exec(`defaults write "${domainKey}" "${key}" ${valueArguments}`);
        }
      }
    }
    logSuccess('Finished writing defaults');
  } catch (error) {
    logFail(`Writing defaults failed: ${error}`);
  }
}

function stringifyValue(value: WriteDefaultsValue): string {
  if (value instanceof Array) {
    return `(${value.map((v) => stringifyValue(v)).join(', ')})`;
  }

  return value.toString();
}
