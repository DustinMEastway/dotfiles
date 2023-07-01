#!/bin/sh
#
# Installs NVM and use it to install Node.js.

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
sourceRelative ./install-homebrew.sh

# Install NVM if it does not exist.
if ( brew ls --versions nvm > /dev/null; )
then
  logSuccess "Skipped NVM installation"
else
  logInfo "Installing NVM"

  # Perform the install of [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md).
  brew install nvm

  logSuccess "NVM installation complete"
fi

# Set up NVM if needed to get access to NPM.
if
  [ "$(command -v npm)" == "" ] \
  || [ "$(command -v nvm)" == "" ]
then
  logInfo "Setting up NVM"

  # NVM setup.
  export NVM_DIR="$HOME/.nvm"
  # This loads NVM.
  [ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && source "$(brew --prefix)/opt/nvm/nvm.sh"
  # This loads NVM bash completion.
  [ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && source "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"

  logSuccess "NVM setup complete"
fi

# Install Node.js if it does not exist.
if [ "$(command -v node)" == "" ]
then
  logInfo "Installing Node.js"

  # Perform the install of [Node.js](https://nodejs.org/en/).
  nvm install stable

  # Link node to the directory where other programs will look for it.
  ln -s "$(command -v node)" "$(brew --prefix)/bin/node"

  logSuccess "Node.js installation complete"
else
  logSuccess "Skipped Node.js installation"
fi
