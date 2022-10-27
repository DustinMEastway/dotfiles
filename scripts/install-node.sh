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
if ( brew ls --versions nvm > /dev/null; )
then
  logSuccess "Skipped NVM installation"
else
  logInfo "Installing NVM"

  # perform the install of [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md)
  brew install nvm

  # NVM setup.
  export NVM_DIR="$HOME/.nvm"
  # This loads NVM.
  [ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && . "$(brew --prefix)/opt/nvm/nvm.sh"
  # This loads NVM bash_completion.
  [ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && . "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"

  logSuccess "NVM installation complete"
fi

# Install Node.js if it does not exist
if [ ! $(which node) ]
then
  logInfo "Installing Node.js"

  # perform the install of [Node.js](https://nodejs.org/en/)
  nvm install node

  # Link node to the directory where other programs will look for it
  ln -s "$(which node)" /usr/local/bin/node

  logSuccess "Node.js installation complete"
else
  logSuccess "Skipped Node.js installation"
fi
