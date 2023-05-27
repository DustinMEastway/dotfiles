#!/usr/bin/env bash
#
# Perform the initial configuration/installs for the system.

# Exit if anything fails.
set -e

# Used to source files relative to the current path.
function sourceRelative() {
  local sourcePath="$(dirname "$BASH_SOURCE")/$1"

  # Load path if it is a file, but not this file.
  if [ -f "$sourcePath" ] && ! [ "$sourcePath" -ef "$BASH_SOURCE" ]
  then
    source $sourcePath
  fi
}

sourceRelative ./functions/logging.sh
sourceRelative ./install-node.sh

# Use cd to move into the dotfiles directory.
cd "$(dirname "$BASH_SOURCE")/.."

# Let node take it from here.
logInfo "Installing node dependencies"
nvm use stable
npm install
logSuccess "Node dependencies installed"
logInfo "Running Node.js bootstraper"
npm run bootstrap -- "$@"
logSuccess "Node.js bootstraper complete"
