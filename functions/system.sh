#!/bin/sh
#
# System functions

# test if current system is running Linux OS
function isLinuxOs() {
	echo "$(expr substr $(uname -s) 1 5)" = "Linux"
}

# test if current system is running Mac OS
function isMacOs() {
	echo "$(uname -s)" == "Darwin"
}