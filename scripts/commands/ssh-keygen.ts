import {
  absoluteConfigPath,
  exec,
  exists,
  logFail,
  logInfo,
  logSuccess,
  toBoolean
} from '../functions/index';
import { Command, EnvironmentConfig } from '../models/index';

export interface SshKeygenConfig {
  file: string;
  skipPassphrase: boolean | string;
  type: string;
}

export const sshKeygen: Command = async (
  config: EnvironmentConfig,
  { file, skipPassphrase, type }:  SshKeygenConfig
) => {
  if (!file || typeof file !== 'string') {
    logFail('ssh-keygen commnd was not provided a valid `file` property.')
  }

  file = absoluteConfigPath(config, file);
  logInfo(`Generating ssh-key "${file}"`);

  if (await exists(file)) {
    logSuccess('Skipped ssh-keygen (file already exists).');
    return;
  }

  const args = [
    (typeof file === 'string') ? ` -f ${absoluteConfigPath(config, file)}` : '',
    (typeof type === 'string') ? ` -t ${type}` : '',
    (toBoolean(skipPassphrase)) ? ' -N ""' : ''
  ].join('');

  await exec('ssh-keygen' + args);

  logSuccess(`ssh-keygen created ${file}`);
}