#!/bin/sh
#
# Loads all scripts in this directory so outer scripts can use their functions.

function loadSources() {
  local scriptDirectory="$(dirname "$BASH_SOURCE")"

  # List files in this directory.
  for sourceFile in $(ls "$scriptDirectory")
  do
    # Load paths that are bash files, but not this file.
    sourceFile="$scriptDirectory/$sourceFile"
    if [[ "$sourceFile" == *.sh ]] && [ -f "$sourceFile" ] && ! [ "$sourceFile" -ef "$BASH_SOURCE" ]
    then
      source $sourceFile
    fi
  done
}

loadSources
