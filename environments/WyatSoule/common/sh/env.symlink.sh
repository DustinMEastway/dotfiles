#!/usr/bin/env bash

export PATH=$PATH:/usr/sbin

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
export EDITOR="/usr/local/bin/nvim"

# Add config specific environment variables.
if [[ -f "$HOME/.env.sh" ]]
then
  source "$HOME/.env.sh"
fi

# Add private environment variables.
if [[ -f "$HOME/.env-private.sh" ]]
then
  source "$HOME/.env-private.sh"
fi
