import { Command, CommandKey } from '../models/index';
import { brewInstall } from './brew-install';
import { brewTap } from './brew-tap';
import { gitSetup } from './git-setup';
import { mkdir } from './mkdir';
import { writeDefaults } from './write-defaults';
import { sshKeygen } from './ssh-keygen';
import { symlink } from './symlink';
import { gitClone } from './git-clone';

/** map of command keys to their commands for easy lookup */
export const commandMap: Record<CommandKey, Command> = {
  'brew-install': brewInstall,
  'brew-tap': brewTap,
  'git-clone': gitClone,
  'git-setup': gitSetup,
  'mkdir': mkdir,
  'ssh-keygen': sshKeygen,
  'symlink': symlink,
  'write-defaults': writeDefaults
};
