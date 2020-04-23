#!/bin/sh
#
# Logging functions to display messages to the user

function logFail() {
	printf "\r\033[2K  [\033[0;31mFAIL\033[0m] $1\n"
	echo ''
	exit
}

function logInfo() {
	printf "\r  [ \033[00;34m..\033[0m ] $1\n"
}

function logQuestion() {
	printf "\r  [ \033[0;33m??\033[0m ] $1\n"
}

function logSuccess() {
	printf "\r\033[2K  [ \033[00;32mOK\033[0m ] $1\n"
}
