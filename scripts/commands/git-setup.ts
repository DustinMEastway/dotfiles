import { dirname } from 'path';
import {
	absoluteConfigPath,
	exec,
	input,
	isFile,
	isMacOs,
	logInfo,
	logSuccess,
	makeDirectory
} from '../functions/index';
import { Command, EnvironmentConfig } from '../models/index';

export interface GitSetupConfig {
	configPath: string;
	templatePath?: string;
}

/** ask for git author information to fill out the gitconfig file */
export const gitSetup: Command = async function (
	config: EnvironmentConfig,
	{ configPath, templatePath }: GitSetupConfig
): Promise<void> {
	configPath = absoluteConfigPath(config, configPath);
	templatePath = templatePath
		? absoluteConfigPath(config, templatePath)
		: './shared/git/template.symlink.gitconfig';

	if (!(await isFile(configPath))) {
		logInfo('Configuring .gitconfig');

		await makeDirectory(dirname(configPath), { recursive: true });

		let gitCredential = 'cache'
		if (await isMacOs()) {
			gitCredential = 'osxkeychain';
		}

		const authorName = await input(' - What is your github author name?');
		const authorEmail = await input(' - What is your github author email?');

		await exec(
			`sed `
			+ `-e "s/AUTHORNAME/${authorName}/g" `
			+ `-e "s/AUTHOREMAIL/${authorEmail}/g" `
			+ `-e "s/GIT_CREDENTIAL_HELPER/${gitCredential}/g" `
			+ `${templatePath} > ${configPath}`
		);

		logSuccess('.gitconfig configuration complete');
	} else {
		logSuccess('Skipped .gitconfig configuration')
	}
}