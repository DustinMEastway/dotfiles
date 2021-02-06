#!/bin/sh
#
# Logging functions to display messages to the user

function logFail() {
	logMessage "$1" "FAIL" "\033[31m\033[05m"
	echo ''
	exit
}

function logInfo() {
	logMessage "$1" " .. " "\033[34m"
}

# Logs a message out for the user to see
# $1 message to display
# $2 inner message to show the user what type it is
# $3 color excape sequence to display inner message in a different color (e.g \033[34m)
function logMessage() {
	printf "\r  [$3$2\033[00m] $1\n"
}

function logQuestion() {
	logMessage "$1" " ?? " "\033[33m"
}

function logSuccess() {
	logMessage "$1" " OK " "\033[32m"
}
