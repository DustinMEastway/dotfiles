import { asyncForEach } from './array';
import { input, logSuccess } from './logging';
import { absolutePath, exists, realpath, rename, remove, symlink } from './file-system';
import { clone } from './object';

export type ConflictMode = 'backup' | 'overwrite' | 'skip';
export interface LinkFileConfig {
	conflictMode?: ConflictMode;
}

/** create a symlink from the source path to the destination path (works for files and directories) */
export async function linkFile(source: string, destination: string, config?: LinkFileConfig): Promise<LinkFileConfig> {
	source = absolutePath(source);
	if (!(await exists(source))) {
		return config;
	}

	config = clone<LinkFileConfig>(config || { conflictMode: null });
	let conflictMode: ConflictMode = null;
	destination = absolutePath(destination);
	if (await exists(destination)) {
		// make sure conflictMode is set if destination already exists
		const currentSrc = await realpath(destination);
		if (currentSrc === source) {
			// skip if destination already points to source
			conflictMode = 'skip';
		} else {
			conflictMode = config.conflictMode;
		}

		while (!conflictMode) {
			// ask the user how to handle the link since the destination exists
			const action = await input(
				`Cannot link "${destination}" to "${source}", destination already exists, what do you want to do?\n`
				+ '[s]kip, [S]kip all, [o]verwrite, [O]verwrite all, [b]ackup, [B]ackup all?'
			);

			switch (action) {
				case 'B':
					config.conflictMode = 'backup';
				case 'b':
					conflictMode = 'backup';
					break;
				case 'O':
					config.conflictMode = 'overwrite';
				case 'o':
					conflictMode = 'overwrite';
					break;
				case 'S':
					config.conflictMode = 'skip';
				case 's':
					conflictMode = 'skip';
					break;
			}
		}

		// perform action due to destination existing
		if (conflictMode == 'backup') {
			const backupPath = `${destination}.backup`;
			await rename(destination, backupPath);
			logSuccess(`Moved "${destination}" to "${backupPath}"`);
		} else if (conflictMode == 'overwrite') {
			await remove(destination);
			logSuccess(`Removed "${destination}"`);
		} else if (conflictMode == 'skip') {
			logSuccess(`Skipped linking "${source}" to "${destination}"`);
		}
	}

	if (conflictMode != 'skip') {
		await symlink(source, destination);
		logSuccess(`Linked "${source}" to "${destination}"`);
	}

	return config;
}

/** create a symlink from the source paths to the destination paths (works for files and directories) */
export async function linkFiles(
	links: { destination: string; source: string; }[],
	config?: LinkFileConfig
): Promise<void> {
	await asyncForEach(links, async ({ destination, source }) => {
		config = await linkFile(source, destination, config);
	});
}
