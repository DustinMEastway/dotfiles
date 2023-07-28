#!/usr/bin/env bash

# *** Environment variables *** #
# Add common environment variables.
if [[ -f "$HOME/.env-common.sh" ]]
then
  source "$HOME/.env-common.sh"
fi

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

# *** Bin directories *** #
# Add common bin commands to PATH.
if [[ -d "$HOME/.bin-common" ]]
then
  export PATH="$HOME/.bin-common:$PATH"
fi

# Add config specific bin commands to PATH.
if [[ -d "$HOME/.bin" ]]
then
  export PATH="$HOME/.bin:$PATH"
fi

# Add private bin commands to PATH.
if [[ -d "$HOME/.bin-private" ]]
then
  export PATH="$HOME/.bin-private:$PATH"
fi

# *** Aliases *** #
# Add common aliases.
if [[ -f "$HOME/.aliases-common.sh" ]]
then
  source "$HOME/.aliases-common.sh"
fi

# Add config specific aliases.
if [[ -f "$HOME/.aliases.sh" ]]
then
  source "$HOME/.aliases.sh"
fi

# Add private aliases.
if [[ -f "$HOME/.aliases-private.sh" ]]
then
  source "$HOME/.aliases-private.sh"
fi

# *** Tools setup *** #
# Brew setup.
if [[ -d "$BREW_PATH/bin/" ]]
then
  eval "$($BREW_PATH/bin/brew shellenv)"
fi

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
