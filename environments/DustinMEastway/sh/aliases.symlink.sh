#!/usr/bin/env bash

# *** git aliases *** #
# display local branches and current status
alias gitS='cls && git branch && git status'

# *** system aliases *** #
# edit aliases
alias aEdit='edit "$HOME/.aliases.zsh"'
# reload aliases
alias aReload='unalias -a && source "$HOME/.aliases.zsh"'
# run the bootstrapper to setup the environment
alias bootstrap='cls && cls && "$HOME/.dotfiles/scripts/bootstrap.sh" --config ./environments/DustinMEastway/linux-config.json'
# clear shorthand for consistency accross systems
alias cls='clear'
# display file type ending symbols ('/' for directories and '@' for symlinks)
alias ls='ls -F'
# default to creating intermediate directories as needed and verbosely logging each created directory
alias mkdir='mkdir -pv'
# remove directories recursively
alias rmdir='rm -rf'
# update all packages
alias updateAll='sudo apt update && brew update && brew upgrade'
