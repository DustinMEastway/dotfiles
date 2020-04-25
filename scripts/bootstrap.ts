import { exec, input, isFile, isMacOs, logInfo, logSuccess } from '../functions/index';

async function setupGitconfig(): Promise<void> {
	const gitconfigPath = 'git/gitconfig.symlink';
	const gitconfigTemplatePath = 'git/gitconfig.symlink.template';

	if (!(await isFile(gitconfigPath))) {
		logInfo('Configuring .gitconfig');

		let gitCredential = 'cache'
		if (await isMacOs()) {
			gitCredential = 'osxkeychain';
		}

		const authorName = await input(' - What is your github author name?');
		const authorEmail = await input(' - What is your github author email?');

		await exec(
			`sed -e "s/AUTHORNAME/${authorName}/g" -e "s/AUTHOREMAIL/${authorEmail}/g" -e `
			+ `"s/GIT_CREDENTIAL_HELPER/${gitCredential}/g" ${gitconfigTemplatePath} > ${gitconfigPath}`
		);

		logSuccess('.gitconfig configuration complete');
	} else {
		logSuccess('Skipped .gitconfig configuration')
	}
}

setupGitconfig();
