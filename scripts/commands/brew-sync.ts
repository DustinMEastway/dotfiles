import {
  exec,
  logFail,
  logInfo,
  logSuccess,
  readJsonFile,
  writeJsonFile
} from '../functions/index';
import { Command, CommandConfig, EnvironmentConfig } from '../models';

/**
 * Synchronizes Brew items in `congig.json` with the items installed on your machine.
 * 
 * @param config - The configuration object containing the path to the config file.
 */
export const brewSync: Command = async (config) => {
  logInfo('BrewSync process initiated...');
  try {
    const data = await readJsonFile(config.configPath) as EnvironmentConfig;
    const { casks, formulae } = await getUpdatedBrewItems(data) ?? { casks: [], formulae: [] };

    // TODO - Better way to handle this?
    if (!casks.length && !formulae.length) {
      return;
    }
    if (casks.length) {
      data.commands.forEach((command: CommandConfig) => {
        if (command.key === 'brew-install' && command.value.args === '--cask') {
          command.value.items = casks;
        }
      });
    }
    if (formulae.length) {
      data.commands.forEach((command: CommandConfig) => {
        if (command.key === 'brew-install' && !command.value.args) {
          command.value.items = formulae;
        }
      });
    }

    logInfo('New items detected, Syncronization in 3... 2... 1... 🚀');
    await writeJsonFile(config.configPath, data)
      .then(() => logSuccess('Brew items syncronized!'));
  }
  catch (error) {
    logFail(`Error syncing brew items: ${error}`);
  }
}

/**
 * Gets any new brew items that are not already in `config.json`.
 * 
 * @param data - The configuration object containing the path to the config file.
 * @returns  The new Brew items to be added to the configuration.
 * @throws An error if the Brew items cannot be found.
 */
const getUpdatedBrewItems = async (data: EnvironmentConfig) => {
  try {
    logInfo('Checking for new casks...');
    const newCasks = await filterBrew(data, true);

    logInfo('Checking for new formulae...');
    const newFormulae = await filterBrew(data, false);

    if (!newCasks.length && !newFormulae.length) {
      logSuccess('No new items to sync.');
      return;
    }

    const jsonCasks = data.commands.find((command: CommandConfig) => {
      return command.key === 'brew-install' && command.value?.args === '--cask'
    })?.value.items as string[];

    const jsonFormulae = data.commands.find((command: CommandConfig) => {
      return command.key === 'brew-install' && !command.value?.args
    })?.value.items as string[];

    const casks = [...jsonCasks, ...newCasks].sort();
    const formulae = [...jsonFormulae, ...newFormulae].sort();

    return { casks, formulae };
  }
  catch (error) {
    logFail(`Error finding brew items: ${error}`);
  }
}

/**
 * Filters the Brew items based on the provided configuration.
 * 
 * @param data - The configuration object containing the path to the config file.
 * @param isCask - A boolean indicating whether the Brew item is a cask.
 * @returns  A promise that resolves with the filtered Brew items.
 */
const filterBrew = async (data: EnvironmentConfig, isCask: boolean) => {
  return (await exec(isCask ? 'brew list --cask' : 'brew list --formula'))
    .split('\n')
    .filter(line => line.trim() !== '')
    .filter((item: string) => !data.commands
      .find((command: CommandConfig) => {
        return command.key === 'brew-install'
          && (isCask ? command.value?.args === '--cask' : !command.value?.args)
          && command.value.items.includes(item)
      }));
}
