#!/bin/sh

# used to source files relative to the current path
function sourceRelative() {
	local fileName="link-file.sh"
	# script path length is the path length minus the file name length
	local scriptPathLength=$(( ${#BASH_SOURCE} - ${#fileName} - 1 ))
	local scriptPath="$(pwd -P)/${BASH_SOURCE:0:$scriptPathLength}"
	local sourcePath="$scriptPath/$1"

	# load paths that are a file, but not this file
	if [ -f $sourcePath ] && [ $sourceFile != $fileName ]
	then
		source $sourcePath
	fi
}

sourceRelative logging.sh
sourceRelative variable-access.sh

# Creates a link from a source to a destination so the same file can be accessed in multiple places
# $1 source path
# $2 destination path
# $3 name of the global variable to get/set conflict resolution mode (optional)
#	Valid modes:
#		"backup" - rename the destination, then create the link
#		"overwrite" - remove the destination, then create the link
#		"skip" - skip creating the link
function linkFile() {
	local source=$1
	local destination=$2
	# check if a value was provided for conflictMode
	local conflictMode=$(getValue $3)

	local backup="false" && [[ "$conflictMode" == "backup" ]] && backup="true"
	local overwrite="false" && [[ "$conflictMode" == "overwrite" ]] && overwrite="true"
	local skip="false" && [[ "$conflictMode" == "skip" ]] && skip="true"

	echo "destination: $destination"
	echo "source: $source"

	# check if destination already exists
	if [ -f "$destination" -o -d "$destination" -o -L "$destination" ]
	then
		# check if a conflict mode was set to handle conflicts
		while [[ "$backup" == "false" && "$overwrite" == "false" && "$skip" == "false" ]]
		do
			local currentSrc="$(readlink $destination)"

			# check if the destination already points to source
			if [ "$currentSrc" == "$source" ]
			then
				echo "destination matches source"
				skip=true;
			else
				# ask the user how to handle the link since the destination exists
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
			fi
		done

		# perform action due to destination existing
		if [ "$backup" == "true" ]
		then
			mv "$destination" "${destination}.backup"
			logSuccess "moved $destination to ${destination}.backup"
		elif [ "$overwrite" == "true" ]
		then
			rm -rf "$destination"
			logSuccess "removed $destination"
		elif [ "$skip" == "true" ]
		then
			logSuccess "skipped $src"
		fi
	fi

	# link destination to source if skip is not set
	if [ "$skip" != "true" ]
	then
		ln -s "$1" "$2"
		logSuccess "linked $1 to $2"
	fi
}
