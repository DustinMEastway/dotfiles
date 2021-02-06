#!/usr/bin/env bash
#
# Perform the initial configuration/installs for the system

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
sourceRelative ./node/install.sh

# Install ts-node if it does not exist
if [ ! $(which ts-node) ]
then
	logInfo "Installing ts-node"

	# perform the install of [ts-node](https://github.com/TypeStrong/ts-node)
	npm i -g ts-node typescript

	logSuccess "ts-node installation complete"
else
	logSuccess "Skipped ts-node installation"
fi

# cd into the dotfiles directory
cd "$(dirname "$BASH_SOURCE")/.."

# let node take it from here
logInfo "Running Node.js bootstraper"
npm run bootstrap
logSuccess "Node.js bootstraper complete"
