#!/bin/sh

# used to source files relative to the current path
function sourceRelative() {
	local sourcePath="$(dirname "$BASH_SOURCE")/$1"

	# load path if it is a file, but not this file
	if [ -f "$sourcePath" ] && ! [ "$sourcePath" -ef "$BASH_SOURCE" ]
	then
		source $sourcePath
	fi
}

sourceRelative logging.sh
sourceRelative variable-access.sh

# Creates a link from a source to a destination so the same file can be accessed in multiple places
# $1 source path
# $2 destination path
# $3 conflict resolution mode (set by variable name, not value; optional)
#	Valid modes:
#		"backup" - rename the destination, then create the link
#		"overwrite" - remove the destination, then create the link
#		"skip" - skip creating the link
function linkFile() {
	local source=$1
	local destination=$2
	# check if a value was provided for conflictMode
	local conflictMode=$(getValue $3)
	local backup= overwrite= skip=

	# check if destination already exists
	if [ -f "$destination" -o -d "$destination" -o -L "$destination" ]
	then
		# set local variables to defaults based on conflictMode
		backup="false" && [[ "$conflictMode" == "backup" ]] && backup="true"
		overwrite="false" && [[ "$conflictMode" == "overwrite" ]] && overwrite="true"
		skip="false" && [[ "$conflictMode" == "skip" ]] && skip="true"

		# make sure that a conflict resolution option is set
		while [[ "$backup" == "false" && "$overwrite" == "false" && "$skip" == "false" ]]
		do
			local currentSrc="$(readlink $destination)"

			# check if the destination already points to source
			if [ "$currentSrc" == "$source" ]
			then
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

	# link destination to source if skip is not set
	if [ "$skip" != "true" ]
	then
		ln -s "$source" "$destination"
		logSuccess "Linked '$source' to '$destination'"
	fi
}
