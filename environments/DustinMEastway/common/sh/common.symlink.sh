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

# Java setup.
if [[ -d "$(brew --prefix)/opt/openjdk/bin" ]]
then
  export PATH="$(brew --prefix)/opt/openjdk/bin:$PATH"
fi

# *** Tools setup *** #
# pipx setup.
if [[ -d "/Users/deastway/.local/bin" ]]
then
  export PATH="$PATH:/Users/deastway/.local/bin"
fi

# Pyenv setup.
if [[ "$(command -v pyenv)" != "" ]]
then
  export PATH="$(pyenv root)/shims:$PATH"
fi

# Rancher setup.
if [[ -d "/Users/deastway/.rd/bin" ]]
then
  export PATH="/Users/deastway/.rd/bin:$PATH"
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
