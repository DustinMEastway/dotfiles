#!/usr/bin/env bash

# Brew setup.
# 1Password is used for env variables so brew has to be set up first.
if [[ -d "/opt/homebrew/bin/" ]]
then
  eval "$(/opt/homebrew/bin/brew shellenv)"
elif [[ -d "/usr/local/bin/" ]]
then
  eval "$(/usr/local/bin/brew shellenv)"
fi

# *** Environment variables *** #
if [[ -f "$HOME/.env-common.sh" ]]
then
  source "$HOME/.env-common.sh"
fi

# *** Bin directories *** #
binDirectories=(
  "$HOME/.bin-common"
  "$HOME/.bin"
  "$HOME/.bin-private"
)

# for key in "${!fruits[@]}"
for binDirectory in "${binDirectories[@]}"
do
  if [[ -d "$binDirectory" ]]
  then
    export PATH="$binDirectory:$PATH"
  fi
done

# *** Add aliases *** #
if [[ -f "$HOME/.aliases-common.sh" ]]
then
  source "$HOME/.aliases-common.sh"
fi

# *** Tools setup *** #
# Pyenv setup.
if [[ "$(command -v pyenv)" != "" ]]
then
  PATH="$(pyenv root)/shims:$PATH"
fi

# Ruby setup.
if [[ -d "$(brew --prefix)/opt/ruby/bin" ]]
then
  export PATH="$(brew --prefix)/opt/ruby/bin:$PATH"
fi

# NVM setup.
export NVM_DIR="$HOME/.nvm"
# This loads NVM.
[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && source "$(brew --prefix)/opt/nvm/nvm.sh"
# This loads NVM bash completion.
[ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && source "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"
