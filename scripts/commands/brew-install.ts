import { exec, logFail, logInfo, logSuccess } from '../functions/index';
import { Command } from '../models/index';

export interface BrewInstallConfig {
  args?: string;
  items: string[];
}

export const brewInstall: Command = async (_, config: BrewInstallConfig) => {
  const { args, items } = config || {};
  if (!(items instanceof Array) || !items.length) {
    logFail('No items were supplied to the brew-install command.');
  } else if (items.some((item) => !item || typeof item !== 'string')) {
    logFail('Invalid item(s) were supplied to the brew-install command.');
  }

  try {
    const itemsToInstall = await filterInstalledPackages(config);
    if (!itemsToInstall.length) {
      return;
    }

    logInfo(`Installing brew packages: ${itemsToInstall.join(', ')}`);
    for (const item of itemsToInstall) {
      await exec([
        'brew install',
        (args) ? args : '',
        item
      ].filter((text) => !!text).join(' '));
      logSuccess(`Installed ${item}`);
    }

    logSuccess('Finished installing brew packages');
  } catch (error) {
    logFail(`Installing brew packages failed: ${error}`);
  }
}

async function filterInstalledPackages(config: BrewInstallConfig): Promise<string[]> {
  const { args, items } = config;
  const isCask = /--casks?\b/.test(args ?? '');
  const installedPackages = new Set(
    (await exec(`brew list ${(isCask) ? '--cask' : '--formula'}`)).split(/\s*\n\s*/)
  );

  const itemsToInstall: string[] = [];
  const itemsToSkip: string[] = [];
  items.forEach((item) => {
    if (installedPackages.has(item)) {
      itemsToSkip.push(item);
    } else {
      itemsToInstall.push(item);
    }
  });

  if (itemsToSkip.length) {
    logSuccess(`Skipped brew package installation (${itemsToSkip})`);
  }

  return itemsToInstall;
}