import {
  englishJoin,
  exec,
  logInfo,
  logSuccess
} from '../functions';
import { Command } from '../models/index';

export interface NpmInstallConfig {
  packages: string[];
}

export const npmInstall: Command<NpmInstallConfig> = async (
  _,
  { packages }
) => {
  const packagesLabel = englishJoin(packages);
  logInfo(`Globally installing "${packagesLabel}" npm packages.`);
  await exec(`npm install -g ${packages.join(' ')}`, { skipStdError: true });
  logSuccess(`Installed ${packagesLabel}.`);
}
