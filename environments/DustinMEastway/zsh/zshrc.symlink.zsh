# shortcut to this dotfiles path
export DOTFILESDIR=$HOME/.dotfiles

# nvm support
export NVM_DIR="$HOME/.nvm"
# This loads nvm
[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && . "$(brew --prefix)/opt/nvm/nvm.sh"
# This loads nvm bash_completion
[ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && . "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"

# Stash your environment variables in ~/.localrc. This means they'll stay out
# of your main dotfiles repository (which may be public, like this one), but
# you'll have access to them in your scripts.
if [[ -a ~/.localrc ]]
then
	source ~/.localrc
fi

# Load aliases
if [[ -a ~/.aliases.zsh ]]
then
	source ~/.aliases.zsh
fi
