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
alias dotfiles="cls && cls && $DOTFILES_DIR/scripts/bootstrap.sh --config $DOTFILES_CONFIG"
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

# TODO: Make an alias to move an item to the trash.
# * https://github.com/morgant/tools-osx/blob/master/src/trash
# * https://apple.stackexchange.com/questions/50844/how-to-move-files-to-trash-from-command-line
