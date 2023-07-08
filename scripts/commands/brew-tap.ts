import { exec, logFail, logInfo, logSuccess } from '../functions/index';
import { Command } from '../models/index';

export interface BrewTapConfig {
  args?: string;
  items: string[];
}

export const brewTap: Command<BrewTapConfig> = async (_, config) => {
  const { args, items } = config || {};
  if (!(items instanceof Array) || !items.length) {
    logFail('No items were supplied to the brew-tap command.');
  } else if (items.some((item) => !item || typeof item !== 'string')) {
    logFail('Invalid item(s) were supplied to the brew-tap command.');
  }

  try {
    logInfo(`Tapping brew repos: ${items.join(' ')}`);
    for (const item of items) {
      await exec([
        'brew tap',
        (args) ? args : '',
        item
      ].filter((text) => !!text).join(' '));
      logSuccess(`Tapped ${item}`);
    }
    logSuccess('Finished tapping brew repos');
  } catch (error) {
    logFail(`Tapping repos failed: ${error}`);
  }
}