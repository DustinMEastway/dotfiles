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
import { getBrewInstallPackages } from './brew-install';

export type BrewSyncConfig = {
  /** Action to take when missing brew items are found @default 'add'. */
  action?: 'add' | 'throw';
};

/**
 * Syncs the Brew items in the configuration file with the installed Brew items.
 * 
 * @param config - The configuration object containing the path to the config file.
 */
export const brewSync: Command<BrewSyncConfig> = async ({ configPath }, { action }) => {
  logInfo('BrewSync process initiated...');
  try {
    const data = await readJsonFile(configPath) as EnvironmentConfig;
    const missingCasks = await updateBrewItems(data, true);
    const missingFormulae = await updateBrewItems(data, false);

    if (!missingCasks.length && !missingFormulae.length) {
      logSuccess('No new items to sync.');
      return;
    } else if (action === 'throw') {
      logFail([
        'Missing packages:',
        (missingFormulae.length) ? `\tFormulae: ${missingFormulae}` : null,
        (missingCasks.length) ? `\tCasks: ${missingCasks}` : null
      ].filter(Boolean).join('\n'));
    }

    logInfo('New items detected, Syncronization in 3... 2... 1... 🚀');
    await writeJsonFile(configPath, data);
    logSuccess('Brew items syncronized!');
  } catch (error) {
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
async function updateBrewItems(data: EnvironmentConfig, isCask: boolean): Promise<string[]> {
  const type = (isCask) ? 'casks' : 'formulae';
  try {
    logInfo(`Checking for new ${type}...`);

    // Check to see if the brew-install commands exist.
    const commands = data.commands.filter((command) => {
      return (
        command.key === CommandKey.brewInstall
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
          items: {}
        }
      };
      data.commands.push(newCommand);
      commands.push(newCommand);
    }

    // Grab the list of items from the commands.
    const commandItems = new Set<string>(commands.map((command) => {
      return getBrewInstallPackages(command.value?.items);
    }).flat());

    // Get the list of installed items.
    const brewListCommand = `brew ${(isCask) ? 'list --cask' : 'leaves --installed-on-request'}`;
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
      return [];
    }

    // Add the missing items to the first command.
    const firstCommand = commands[0];
    if (firstCommand.value.items instanceof Array) {
      firstCommand.value.items = [...firstCommand.value.items, ...missingItems].sort();
    } else {
      const entries = [
        ...Object.entries(firstCommand.value.items),
        ...missingItems.map((item): [string, null] => [item, null])
      ].sort(([itemA], [itemB]) => itemA?.localeCompare(itemB));

      firstCommand.value.items = Object.fromEntries(entries);
    }

    return missingItems;
  } catch (error) {
    throw logFail(`Error checking for new ${type}: ${error}`);
  }
}
