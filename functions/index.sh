#!/bin/sh
#
# Loads all scripts in this directory

function loadSources() {
	local scriptDirectory="$(dirname "$BASH_SOURCE")"

	# list files in this directory
	for sourceFile in $(ls "$scriptDirectory")
	do
		# load paths that are bash files, but not this file
		sourceFile="$scriptDirectory/$sourceFile"
		if [[ "$sourceFile" == *.sh ]] && [ -f "$sourceFile" ] && ! [ "$sourceFile" -ef "$BASH_SOURCE" ]
		then
			source $sourceFile
		fi
	done
}

loadSources
