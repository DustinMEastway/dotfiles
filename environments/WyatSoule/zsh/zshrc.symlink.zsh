export NVM_DIR="$HOME/.nvm"
  [ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion

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
source <(ng completion script)
