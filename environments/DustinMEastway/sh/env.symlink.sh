#!/bin/bash

# Determine the current bash env.
export LINUX_TYPE="linux"
export ROOT_DIRECTORY="/"
if [[ -d "/c" ]]
then
  LINUX_TYPE="git-bash"
  ROOT_DIRECTORY="/c"
elif [[ -d "/mnt/c``" ]]
then
  LINUX_TYPE="linux-subsystem"
  ROOT_DIRECTORY="/mnt/c"
fi
