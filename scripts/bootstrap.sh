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

# install Node.js
sourceRelative ../node/install.sh

# install ts-node & typescript
npm i -g ts-node typescript

# cd into the scripts directory
ts-node "$(dirname "$BASH_SOURCE")/bootstrap.ts"
