# shortcut to this dotfiles path
export DOTFILESDIR=$HOME/.dotfiles

# Add to PATH variable
export PATH="/usr/local/opt/openssl/bin:$PATH"

# nvm support
export NVM_DIR="$HOME/.nvm"
# This loads nvm
[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && . "$(brew --prefix)/opt/nvm/nvm.sh"
# This loads nvm bash_completion
[ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && . "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"

# Load environmental variables
if [[ -f ~/.env.zsh ]]
then
  source ~/.env.zsh
fi

# Load aliases
if [[ -f ~/.aliases.zsh ]]
then
  source ~/.aliases.zsh
fi
