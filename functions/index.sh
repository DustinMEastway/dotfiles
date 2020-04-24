#!/bin/sh
#
# Loads all scripts in this directory

function loadSources() {
	local scriptDirectory="$(dirname "$BASH_SOURCE")"

	# list files in this directory
	for sourceFile in $(ls "$scriptDirectory")
	do
		# load paths that are a file, but not this file
		sourceFile="$scriptDirectory/$sourceFile"
		if [ -f "$sourceFile" ] && ! [ "$sourceFile" -ef "$BASH_SOURCE" ]
		then
			source $sourceFile
		fi
	done
}

loadSources
