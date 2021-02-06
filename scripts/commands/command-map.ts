import { Command, CommandKey } from '../models/index';
import { gitSetup } from './git-setup';
import { mkdir } from './mkdir';
import { sshKeygen } from './ssh-keygen';
import { symlink } from './symlink';


/** map of command keys to their commands for easy lookup */
export const commandMap = new Map<CommandKey, Command>([
	[ 'git-setup', gitSetup ],
	[ 'mkdir', mkdir ],
	[ 'ssh-keygen', sshKeygen ],
	[ 'symlink', symlink ]
]);
