#!/bin/sh
#
# Functions to access and modify variable values by name

# gets a global variable's value using its name
# $1 name of the global variable to get the value of
function getValue() {
	local temp

	if [ "$1" != "" ]
	then
		eval "temp=\"\$$1\""
		echo $temp
	fi
}

# sets a global variable's value using its name
# $1 name of the global variable to set the value of
# $2 value to set the variable to
function setValue() {
	if [ "$1" != "" ]
	then
		eval "$1=\"$2\""
	fi
}
