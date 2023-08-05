#!/usr/bin/env bash

if [[ "$OSTYPE" == "darwin"* ]]; then
  export ENV_TYPE="macos"
  export ROOT_DIRECTORY="/"
elif [[ -d "/c" ]]
then
  export ENV_TYPE="git-bash"
  export ROOT_DIRECTORY="/c"
elif [[ -d "/mnt/c``" ]]
then
  export ENV_TYPE="linux-subsystem"
  export ROOT_DIRECTORY="/mnt/c"
fi

export DOTFILES_DIR="$HOME/Sites/dotfiles"
