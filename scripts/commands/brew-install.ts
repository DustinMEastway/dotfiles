import { exec, logFail, logInfo, logSuccess } from '../functions/index';
import { Command } from '../models/index';

export type BrewInstallItemConfig = {
  description?: string;
};

export type BrewInstallConfig = {
  args?: string;
  items: (
    // List of dependencies.
    string[]
    // Keys are dependencies & values are configurations.
    | Record<string, BrewInstallItemConfig | null>
  );
}

export const brewInstall: Command<BrewInstallConfig> = async (_, config) => {
  const { args } = config || {};

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

export function getBrewInstallPackages(items: BrewInstallConfig['items']): string[] {
  items = (items instanceof Array) ? items : (
    (items instanceof Object) ? Object.keys(items) : []
  );

  if (!items.length) {
    logFail('No items were supplied to the brew-install command.');
  } else if (items.some((item) => !item || typeof item !== 'string')) {
    logFail('Invalid item(s) were supplied to the brew-install command.');
  }

  return items;
}

async function filterInstalledPackages({ args, items }: BrewInstallConfig): Promise<string[]> {
  const isCask = /--casks?\b/.test(args ?? '');
  const installedPackages = new Set(
    (await exec(`brew list ${(isCask) ? '--cask' : '--formula'}`)).split(/\s*\n\s*/)
  );

  const itemsToInstall: string[] = [];
  const itemsToSkip: string[] = [];
  getBrewInstallPackages(items).forEach((item) => {
    item = item.replace(/.*\//, '');
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