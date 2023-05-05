#!/usr/bin/env bash 

export PATH="/usr/local/opt/openssl/bin:$PATH"

# Run common commands.
if [[ -f "$HOME/.common.sh" ]]
then
  source "$HOME/.common.sh"
fi
