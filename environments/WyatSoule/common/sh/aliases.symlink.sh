#!/usr/bin/env bash

# *** Node.js aliases *** #
alias createReactApp='npx create-react-app --template typescript'

# *** Git aliases *** #
# Display local branches and current status.
alias gitS='cls && git branch && git status'

# *** System aliases *** #
# Edit common aliases.
alias aEditCommon="edit $HOME/.aliases-common.sh"
# Edit custom aliases.
alias aEditCustom="edit $HOME/.aliases.sh"
# Reload aliases.
alias aReload="unalias -a && source $HOME/.aliases-common.sh"
# Clear shorthand for consistency accross systems.
alias cls='clear'
# Run the dotfiles to setup the environment.
# alias dotfiles="cls && cls && $DOTFILES_DIR/scripts/bootstrap.sh --config $DOTFILES_CONFIG"
# Hide hidden files in Finder.
alias hideHiddenFiles='defaults write com.apple.finder AppleShowAllFiles NO && killall Finder'
# List all versions of Java that are installed.
alias javaListVersions='aliase /usr/libexec/java_home -V'
# Display file type ending symbols ('/' for directories and '@' for symlinks).
alias ll='ls -F -a'
# Default to creating intermediate directories as needed and verbosely logging each created directory.
alias mkdir='mkdir -pv'
# Remove directories recursively.
alias rmdir='rm -rf'
# Reinstalling xCode fixes an issue with npm.
alias reinstallXCode='sudo rm -rf $(xcode-select -print-path) && xcode-select --install'
# Show hidden files in Finder.
alias showHiddenFiles='defaults write com.apple.finder AppleShowAllFiles YES && killall Finder'
# Update all packages.
alias updateAll='brew update && brew upgrade'
#show slashes indicators on ls
alias ls='ls -F'
#show all branches in git
alias glola='git log --graph --oneline --decorate --all --abbrev-commit'

# edit nvim config
alias editNvim='cd ~/.config/nvim/ && vim'

#turn on and off repeating keyboard presses
alias repeatOn='defaults write com.sublimetext.4 ApplePressAndHoldEnabled -bool false'
alias repeatOff='defaults write com.sublimetext.4 ApplePressAndHoldEnabled -bool true'

alias vim='nvim --listen /tmp/nvim-server.pipe'

alias buildDotfiles='darwin-rebuild switch --flake ~/.dotfiles/.config/nix'
# open in neovim
function edit(){
  vim "$1"
    # opens sublime text to edit
    # open -a /Applications/Sublime\ Text.app "$1"
}

function runCpp(){
    outName="${1/.cpp/}"
    nodemon --exec "clear && g++ -Wall -std=c++17 $1 $2 && ./a.out " -e "cpp"
}
 function runC(){
    outName="${1/.c/}"
      clear && gcc -Wall -o $outName $1 && ./$outName
}

function runPy() {
  file=$1
  nodemon --exec "clear && python3 $1" --ext py
}


# TODO: Make an alias to move an item to the trash.
# * https://github.com/morgant/tools-osx/blob/master/src/trash
# * https://apple.stackexchange.com/questions/50844/how-to-move-files-to-trash-from-command-line


# Add config specific aliases.
if [[ -f "$HOME/.aliases.sh" ]]
then
  source "$HOME/.aliases.sh"
fi

# Add private aliases.
if [[ -f "$HOME/.aliases-private.sh" ]]
then
  source "$HOME/.aliases-private.sh"
fi

