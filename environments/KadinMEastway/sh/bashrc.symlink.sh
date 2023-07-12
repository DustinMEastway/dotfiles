#!/usr/bin/env bash

# Load environmental variables.
if [[ -f "$HOME/.env.sh" ]]
then
  source "$HOME/.env.sh"
fi

# Load private environmental variables.
if [[ -f "$HOME/.env-private.sh" ]]
then
  source "$HOME/.env-private.sh"
fi

# Brew setup.
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"

# Run common commands.
if [[ -f "$HOME/.common.sh" ]]
then
  source "$HOME/.common.sh"
fi

# Load aliases.
if [[ -f "$HOME/.aliases.sh" ]]
then
  source "$HOME/.aliases.sh"
fi
