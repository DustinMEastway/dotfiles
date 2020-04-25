#!/bin/sh
#
# Logging functions to display messages to the user

function logFail() {
	printf "\r  [\033[31m\033[05mFAIL\033[00m] $1\n"
	echo ''
	exit
}

function logInfo() {
	printf "\r  [ \033[34m..\033[00m ] $1\n"
}

function logQuestion() {
	printf "\r  [ \033[33m??\033[00m ] $1\n"
}

function logSuccess() {
	printf "\r  [ \033[32mOK\033[00m ] $1\n"
}
