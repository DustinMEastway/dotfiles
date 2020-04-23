#!/bin/sh
#
# System functions

function isMacOs() {
	echo "$(uname -s)" == "Darwin"
}