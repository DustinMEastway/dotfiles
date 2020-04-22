#!/bin/sh
#
# Loads all scripts in this directory

function loadFunctions() {
	# list of files to load
	local sourceFiles=(logging.sh)
	local fileName="index.sh"
	# length is the path length minus the file name length
	local pathLength=$(( ${#BASH_SOURCE} - ${#fileName} - 1 ))
	local basePath="$(pwd -P)/${BASH_SOURCE:0:$pathLength}"

	for sourceFile in ${sourceFiles[*]}
	do
		source "$basePath/$sourceFile"
	done
}

loadFunctions
