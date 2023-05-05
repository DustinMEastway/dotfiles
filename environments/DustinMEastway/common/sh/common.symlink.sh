#!/usr/bin/env bash

# Add environment variables.
if [[ -f "$HOME/.env.zsh" ]]
then
  source "$HOME/.env.zsh"
fi

# Add private environment variables.
if [[ -f "$HOME/.env-private.zsh" ]]
then
  source "$HOME/.env-private.zsh"
fi

# Set PATH so it includes user's personal bin if it exists.
if [[ -d "$HOME/.bin" ]]
then
  export PATH="$HOME/.bin:$PATH"
fi

# Set PATH so it includes user's private bin if it exists.
if [[ -d "$HOME/.bin-private" ]]
then
  export PATH="$HOME/.bin-private:$PATH"
fi

# Load aliases.
if [[ -f "$HOME/.aliases.zsh" ]]
then
  source "$HOME/.aliases.zsh"
fi

# Brew setup.
eval "$(/opt/homebrew/bin/brew shellenv)"

# NVM setup.
export NVM_DIR="$HOME/.nvm"
# This loads NVM.
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"
# This loads NVM bash completion
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"

# Python setup.
PATH=$(pyenv root)/shims:$PATH
