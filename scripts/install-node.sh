#!/bin/sh
#
# Installs Node.js

# exit if anything fails
set -e

# used to source files relative to the current path
function sourceRelative() {
  local sourcePath="$(dirname "$BASH_SOURCE")/$1"

  # load path if it is a file, but not this file
  if [ -f "$sourcePath" ] && ! [ "$sourcePath" -ef "$BASH_SOURCE" ]
  then
    source $sourcePath
  fi
}

sourceRelative ./functions/logging.sh
sourceRelative ./install-homebrew.sh

# Install NVM if it does not exist
if [ ! $(which nvm) ]
then
  logInfo "Installing NVM"

  # perform the install of [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md)
  brew install nvm

  logSuccess "NVM installation complete"
else
  logSuccess "Skipped NVM installation"
fi

# Install Node.js if it does not exist
if [ ! $(which node) ]
then
  logInfo "Installing Node.js"

  # perform the install of [Node.js](https://nodejs.org/en/)
  nvm install node

  logSuccess "Node.js installation complete"
else
  logSuccess "Skipped Node.js installation"
fi
