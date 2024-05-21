import {
  exec,
  logFail,
  logInfo,
  logSuccess,
  readJsonFile,
  writeJsonFile
} from '../functions/index';
import {
  Command,
  CommandKey,
  EnvironmentConfig
} from '../models';

/**
 * Syncs the Brew items in the configuration file with the installed Brew items.
 * 
 * @param config - The configuration object containing the path to the config file.
 */
export const brewSync: Command = async (config) => {
  logInfo('BrewSync process initiated...');
  try {
    const data = await readJsonFile(config.configPath) as EnvironmentConfig;
    const isCasksUpdated = await updateBrewItems(data, true);
    const isFormulaeUpdated = await updateBrewItems(data, false);

    if (!isCasksUpdated && !isFormulaeUpdated) {
      logSuccess('No new items to sync.');
      return;
    }

    logInfo('New items detected, Syncronization in 3... 2... 1... 🚀');
    await writeJsonFile(config.configPath, data);
    logSuccess('Brew items syncronized!');
  }
  catch (error) {
    logFail(`Error syncing brew items: ${error}`);
  }
}

/**
 * Updates the Brew items in the configuration file.
 * 
 * @param data - The configuration object containing the path to the config file.
 * @param isCask - A boolean indicating whether the Brew item is a cask.
 * @returns  A promise that resolves with a boolean indicating whether the Brew items were updated.
 */
async function updateBrewItems(data: EnvironmentConfig, isCask: boolean): Promise<boolean> {
  const type = isCask ? 'casks' : 'formulae';
  try {
    logInfo(`Checking for new ${type}...`);

    // Check to see if the brew-install commands exist.
    const commands = data.commands.filter((command) => {
      return (
        command.key === 'brew-install'
        && command.value
        && isCask === /--casks?\b/.test(command.value.args ?? '')
      )
    });

    // If commands do not exist, create them.
    if (!commands.length) {
      const newCommand = {
        key: CommandKey.brewInstall,
        value: {
          args: (isCask) ? '--cask' : '',
          items: []
        }
      };
      data.commands.push(newCommand);
      commands.push(newCommand);
    }

    // Grab the list of items from the commands.
    const commandItems = new Set<string>(commands.map((command) => {
      return command.value?.items ?? [];
    }).flat());

    // Get the list of installed items.
    const brewListCommand = `brew ${(isCask) ? 'list --cask' : 'leaves'}`;
    const installedItems = (await exec(brewListCommand)).split('\n');

    // Find the items that are in the installed list but not in the command list.
    const missingItems = installedItems.map((item) => {
      return item.trim();
    }).filter((item) => {
      return (
        item
        && !commandItems.has(item)
      );
    });

    if (!missingItems.length) {
      return false;
    }

    // Add the missing items to the first command.
    const firstCommand = commands[0];
    firstCommand.value.items = [...firstCommand.value.items, ...missingItems].sort();

    return true;
  } catch (error) {
    logFail(`Error checking for new ${type}: ${error}`);
  }

  return true;
}
