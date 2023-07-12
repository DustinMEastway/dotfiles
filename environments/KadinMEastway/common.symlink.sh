#!/usr/bin/env bash

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

# NVM setup.
export NVM_DIR="$HOME/.nvm"
# This loads NVM.
[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && . "$(brew --prefix)/opt/nvm/nvm.sh"
# This loads NVM bash_completion.
[ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && . "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"

# Ruby setup.
if [[ -d "/usr/local/opt/ruby@2.7/bin" ]]
then
  export PATH="/usr/local/opt/ruby@2.7/bin:$PATH"
fi
