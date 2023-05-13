# NVM setup.
export NVM_DIR="$HOME/.nvm"
# This loads NVM.
[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && source "$(brew --prefix)/opt/nvm/nvm.sh"
# This loads NVM bash completion.
[ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && source "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"

# bring in environmental valiables
if [[ -f ~/.env.zsh ]]
then
    source ~/.env.zsh
fi
# bring in aliases
if [[ -f ~/.aliases.zsh ]]
then
  source ~/.aliases.zsh
fi

# Load Angular CLI autocompletion.
# source <(npx ng completion script)
