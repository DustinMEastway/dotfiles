#!/bin/sh
#
# Installs Homebrew.

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

# Install Homebrew if it does not exist.
if [ "$(command -v brew)" == "" ]
then
  logInfo "Installing Homebrew"

  # Perform the install of [Homebrew](https://brew.sh).
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

  # Start brew up for the first time.
  if [[ -d "/opt/homebrew/bin/" ]]
  then
    eval "$(/opt/homebrew/bin/brew shellenv)"
  elif [[ -d "/usr/local/bin/" ]]
  then
    eval "$(/usr/local/bin/brew shellenv)"
  fi

  logSuccess "Homebrew installation complete"
else
  logSuccess "Skipped Homebrew installation"
fi

logInfo "Updating Homebrew"
brew update
logSuccess "Homebrew update complete"
