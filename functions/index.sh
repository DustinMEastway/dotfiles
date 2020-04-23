#!/bin/sh
#
# Loads all scripts in this directory

function loadFunctions() {
	local fileName="index.sh"
	# script path length is the path length minus the file name length
	local scriptPathLength=$(( ${#BASH_SOURCE} - ${#fileName} - 1 ))
	local scriptPath="$(pwd -P)/${BASH_SOURCE:0:$scriptPathLength}"

	# list files in this directory
	for sourceFile in $(ls $scriptPath)
	do
		local sourcePath="$scriptPath/$sourceFile"

		# load paths that are a file, but not this file
		if [ -f $sourcePath ] && [ $sourceFile != $fileName ]
		then
			source $sourcePath
		fi
	done
}

loadFunctions
