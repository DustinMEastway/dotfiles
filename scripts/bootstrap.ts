import {
	asyncForEach,
	exec,
	input,
	isFile,
	isMacOs,
	linkFiles,
	logInfo,
	logSuccess,
	readFile,
	searchDirectory
} from './functions/index';

/** ask for git author information to fill out the gitconfig file */
async function setupGitconfig(): Promise<void> {
	const gitconfigPath = 'git/symlink.gitconfig';
	const gitconfigTemplatePath = 'git/template.symlink.gitconfig';

	if (!(await isFile(gitconfigPath))) {
		logInfo('Configuring .gitconfig');

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
			+ `${gitconfigTemplatePath} > ${gitconfigPath}`
		);

		logSuccess('.gitconfig configuration complete');
	} else {
		logSuccess('Skipped .gitconfig configuration')
	}
}

/** set up symlinks specified by the symlink.json files in this directory */
async function setupSymlinks(): Promise<void> {
	logInfo("Configuring symlinks");
	const symlinkConfigs = await searchDirectory(
		'.',
		{ directoryFilter: /^(?!.*\/\.git$)/, itemFilter: /^.*\/symlink\.json$/ }
	);

	await asyncForEach(symlinkConfigs, async ({ directoryPath, path }) => {
		const symlinkConfigs = JSON.parse(await readFile(path)) as { file: string; link: string; }[];
		await linkFiles(symlinkConfigs.map(({ file, link }) => ({ destination: link, source: `${directoryPath}/${file}` })));
	});

	logSuccess("Symlinks configuration complete");
}

async function main(): Promise<void> {
	await setupGitconfig();
	await setupSymlinks();
}

main();
