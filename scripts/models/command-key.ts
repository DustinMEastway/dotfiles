/** type used to determine which @see Command to run */
export enum CommandKey {
  brewInstall = 'brew-install',
  brewSync = 'brew-sync',
  brewTap = 'brew-tap',
  gitClone = 'git-clone',
  gitSetup = 'git-setup',
  mkdir = 'mkdir',
  npmInstall = 'npm-install',
  sshKeygen = 'ssh-keygen',
  symlink = 'symlink',
  writeDefaults = 'write-defaults',
}
