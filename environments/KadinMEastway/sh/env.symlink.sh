#!/usr/bin/env bash

# Determine the current bash env.
export ENV_TYPE="linux"
export ROOT_DIRECTORY="/"
if [[ -d "/c" ]]
then
  ENV_TYPE="git-bash"
  ROOT_DIRECTORY="/c"
elif [[ -d "/mnt/c``" ]]
then
  ENV_TYPE="linux-subsystem"
  ROOT_DIRECTORY="/mnt/c"
fi
