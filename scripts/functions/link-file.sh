#!/bin/sh

# Used to source files relative to the current path.
function sourceRelative() {
  local sourcePath="$(dirname "$BASH_SOURCE")/$1"

  # Load path if it is a file, but not this file.
  if [ -f "$sourcePath" ] && ! [ "$sourcePath" -ef "$BASH_SOURCE" ]
  then
    source $sourcePath
  fi
}

sourceRelative logging.sh
sourceRelative variable-access.sh

# Create a symlink from the source path to the destination path (works for files and directories).
# $1 source path
# $2 destination path
# $3 conflict resolution mode (set by variable name, not value; optional)
#  Valid modes:
#    "backup" - rename the destination, then create the link
#    "overwrite" - remove the destination, then create the link
#    "skip" - skip creating the link
function linkFile() {
  local source=$1
  local destination=$2
  # Check if a value was provided for conflictMode.
  local conflictMode=$(getValue $3)
  local backup= overwrite= skip=

  # Check if destination already exists.
  if [ -f "$destination" -o -d "$destination" -o -L "$destination" ]
  then
    local currentSrc="$(readlink $destination)"

    # Check if the destination already points to source.
    if [ "$currentSrc" == "$source" ]
    then
      skip=true;
    else
      # Set local variables to defaults based on conflictMode.
      backup="false" && [[ "$conflictMode" == "backup" ]] && backup="true"
      overwrite="false" && [[ "$conflictMode" == "overwrite" ]] && overwrite="true"
      skip="false" && [[ "$conflictMode" == "skip" ]] && skip="true"
    fi

    # Make sure that a conflict resolution option is set.
    while [[ "$backup" == "false" && "$overwrite" == "false" && "$skip" == "false" ]]
    do
      # Ask the user how to handle the link since the destination exists.
      logQuestion "File already exists: $destination ($(basename "$source")), what do you want to do?\n\
        [s]kip, [S]kip all, [o]verwrite, [O]verwrite all, [b]ackup, [B]ackup all?"

      local action=
      read -n 1 action
      echo ""
      case "$action" in
        B )
          backup=true
          setValue $3 "backup";;
        b )
          backup=true;;
        O )
          overwrite=true
          setValue $3 "overwrite";;
        o )
          overwrite=true;;
        S )
          skip=true
          setValue $3 "skip";;
        s )
          skip=true;;
        * )
          ;;
      esac
    done

    # Perform action due to destination existing.
    if [ "$backup" == "true" ]
    then
      mv "$destination" "${destination}.backup"
      logSuccess "Moved '$destination' to '${destination}.backup'"
    elif [ "$overwrite" == "true" ]
    then
      rm -rf "$destination"
      logSuccess "Removed '$destination'"
    elif [ "$skip" == "true" ]
    then
      logSuccess "Skipped linking '$source' to '$destination'"
    fi
  fi

  # Link destination to source if skip is not set.
  if [ "$skip" != "true" ]
  then
    ln -s "$source" "$destination"
    logSuccess "Linked '$source' to '$destination'"
  fi
}
