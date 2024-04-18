import { Command, CommandKey } from '../models/index';
import { brewInstall } from './brew-install';
import { brewSync } from './brew-sync';
import { brewTap } from './brew-tap';
import { gitClone } from './git-clone';
import { gitSetup } from './git-setup';
import { mkdir } from './mkdir';
import { npmInstall } from './npm-install';
import { sshKeygen } from './ssh-keygen';
import { symlink } from './symlink';
import { writeDefaults } from './write-defaults';

/** map of command keys to their commands for easy lookup */
export const commandMap: Record<CommandKey, Command<any>> = {
  [CommandKey.brewInstall]: brewInstall,
  [CommandKey.brewSync]: brewSync,
  [CommandKey.brewTap]: brewTap,
  [CommandKey.gitClone]: gitClone,
  [CommandKey.gitSetup]: gitSetup,
  [CommandKey.mkdir]: mkdir,
  [CommandKey.npmInstall]: npmInstall,
  [CommandKey.sshKeygen]: sshKeygen,
  [CommandKey.symlink]: symlink,
  [CommandKey.writeDefaults]: writeDefaults
};
