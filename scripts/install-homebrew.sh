#!/bin/sh
#
# Installs Homebrew

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

# Install Homebrew if it does not exist
if [ ! $(which brew) ]
then
  logInfo "Installing Homebrew"

  # perform the install of [Homebrew](https://brew.sh)
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

  logSuccess "Homebrew installation complete"
else
  logSuccess "Skipped Homebrew installation"
fi

logInfo "Updating Homebrew"
brew update
logSuccess "Homebrew update complete"
