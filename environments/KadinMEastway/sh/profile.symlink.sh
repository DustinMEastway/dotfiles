#!/usr/bin/env bash

# If running bash, run its rc file.
if [[ -n "$BASH_VERSION" && -f "$HOME/.bashrc" ]]
then
  source "$HOME/.bashrc"
fi
