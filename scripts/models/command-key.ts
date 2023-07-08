/** type used to determine which @see Command to run */
export type CommandKey = (
  'brew-install'
  | 'brew-tap'
  | 'git-clone'
  | 'git-setup'
  | 'mkdir'
  | 'npm-install'
  | 'ssh-keygen'
  | 'symlink'
  | 'write-defaults'
);
