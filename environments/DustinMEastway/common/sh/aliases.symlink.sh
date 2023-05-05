#!/usr/bin/env bash

# Git aliases.
alias gitS='cls && git branch && git status'

# System aliases.
alias aEditCommon='edit ~/.common.aliases.sh'
alias aEditCustom='edit ~/.aliases.zsh'
alias aReload='unalias -a && source ~/.aliases.zsh'
alias cls='clear'
alias dotfiles="~/Sites/dotfiles/scripts/bootstrap.sh --config $DOTFILES_CONFIG"
alias hideHiddenFiles='defaults write com.apple.finder AppleShowAllFiles NO && killall Finder'
alias ll='ls -F -a'
alias showHiddenFiles='defaults write com.apple.finder AppleShowAllFiles YES && killall Finder'
alias updateAll='brew update && brew upgrade'
