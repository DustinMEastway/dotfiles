import { dirname } from 'path';
import { commandMap } from './commands/command-map';
import {
	absolutePath,
	asyncForEach,
	input,
	isFile,
	logFail,
	logInfo,
	readJsonFile
} from './functions/index';
import { EnvironmentConfig } from './models/index';

const exampleConfigText = 'For an example configuration, see ./environments/DustinMEastway/macos-config.json';
const text = {
	invalidConfigPath: 'The config argument was not specified or it was invalid.\n'
		+ 'What file should be used to configure the environment?',
	invalidConfig: 'The specified config exists, but does not contain a valid configuration.\n' + exampleConfigText,
	noCommands: 'No commands found in the specified config file.\n' + exampleConfigText

}

async function getConfig() {
	const configIndex = process.argv.indexOf('config');
	let configPath = process.argv[configIndex + 1];
	let config: EnvironmentConfig;

	while (!config) {
		while (!configPath || !await isFile(configPath)) {
			configPath = await input(text.invalidConfigPath);
		}

		// get the absolute path so require is not mad about being somewhere other than the current directory
		configPath = absolutePath(configPath);
		config = await readJsonFile(configPath);

		let validConfig = true;
		if (!config || typeof config !== 'object') {
			logInfo(text.invalidConfig);
			validConfig = false;
		} else if (!(config.commands instanceof Array) || config.commands.length < 1) {
			logInfo(text.noCommands);
			validConfig = false;
		}

		if (!validConfig) {
			config = null;
			configPath = '';
		}
	}

	config.fileRoot = (typeof config.fileRoot === 'string') ? config.fileRoot : dirname(configPath);

	return config;
}

async function main(): Promise<void> {
	const config = await getConfig();

	await asyncForEach(config.commands, async (commandConfig, index) => {
		const command = commandMap[commandConfig?.key];

		if (!command) {
			logFail(
				`Invalid command key "${commandConfig?.key}" provided for command index ${index}.\n`
				+ 'A valid list of command keys can be found in the `command-key.ts` file'
			);
		}

		await command(config, commandConfig?.value);
	});
}

main();

// cls; cls; ./scripts/bootstrap.sh config ./environments/DustinMEastway/macos-config.json