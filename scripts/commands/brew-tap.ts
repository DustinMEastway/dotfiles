import { exec, logFail, logInfo, logSuccess } from '../functions/index';
import { Command } from '../models/index';

export interface BrewTapConfig {
	args?: string;
	items: string[];
}

export const brewTap: Command = async (_, config: BrewTapConfig) => {
	const { args, items } = config || {};
	if (!(items instanceof Array) || !items.length) {
		logFail('No items were supplied to the brew-tap command.');
	} else if (items.some((item) => !item || typeof item !== 'string')) {
		logFail('Invalid item(s) were supplied to the brew-tap command.');
	}

	try {
		const itemsString = items.join(' ');
		logInfo(`Tapping brew repos: ${itemsString}`)
		await exec([
			'brew tap',
			(args) ? args : '',
			itemsString
		].filter((text) => !!text).join(' '));
		logSuccess('Finished tapping brew repos');
	} catch (error) {
		logFail(`Tapping repos failed: ${error}`);
	}
}