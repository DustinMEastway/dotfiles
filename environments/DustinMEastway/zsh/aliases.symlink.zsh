# *** games aliases *** #
alias cdMinecraft='cd ~/Library/Application\ Support/minecraft/'
alias rmSteam='mv ~/Library/Application\ Support/Steam ~/.Trash/Steam'
alias steamSetup='hdiutil attach ~/Documents/Steam.dmg -mountroot ~/Library/Application\ Support'

# *** git aliases *** #
# display local branches and current status
alias gitS='cls && git branch && git status'

# *** media aliases *** #
alias calibredb='/Applications/calibre.app/Contents/MacOS/calibredb'
alias cdCalibre='cd ~/Documents/Books/Calibre\ Library/'
alias cdIBooks='cd ~/Library/Containers/com.apple.BKAgentService/Data/Documents/iBooks'
alias cdKindle='cd ~/Library/Application\ Support/Kindle/My\ Kindle\ Content'
alias openICloud='open ~/Library/Mobile\ Documents/com~apple~CloudDocs/'

# *** mongodb aliases *** #
alias mongoConfig='edit /usr/local/etc/mongod.conf'
alias mongoRestart='brew services restart mongodb-community'
alias mongoStart='brew services start mongodb-community'
alias mongoStop='brew services stop mongodb-community'

# *** node.js aliases *** #
alias createReactApp='npx create-react-app --template typescript'

# *** system aliases *** #
# edit aliases
alias aEdit='edit ~/.aliases.zsh'
# reload aliases
alias aReload='unalias -a && source ~/.aliases.zsh'
# run the bootstrapper to setup the environment
alias bootstrap='cls && cls && ~/.dotfiles/scripts/bootstrap.sh --config ./environments/DustinMEastway/macos-config.json'
# clear shorthand for consistency accross systems
alias cls='clear'
# hide hidden files in Finder
alias hideHiddenFiles='defaults write com.apple.finder AppleShowAllFiles NO && killall Finder'
# display file type ending symbols ('/' for directories and '@' for symlinks)
alias ls='ls -F'
# default to creating intermediate directories as needed and verbosely logging each created directory
alias mkdir='mkdir -pv'
# remove directories recursively
alias rmdir='rm -rf '
# show hidden files in Finder
alias showHiddenFiles='defaults write com.apple.finder AppleShowAllFiles YES && killall Finder'
# update brew and its packages
alias updateBrew='brew update && brew upgrade'
# reinstalling xCode fixes an issue with npm
alias reinstallXCode='sudo rm -rf $(xcode-select -print-path) && xcode-select --install'
# reads system defaults into a text file
alias readDefaults='defaults read > ~/Sites/dotfiles/defaults.txt'
# TODO: move an item to the trash
# * https://github.com/morgant/tools-osx/blob/master/src/trash
# * https://apple.stackexchange.com/questions/50844/how-to-move-files-to-trash-from-command-line
alias trash='echo "TODO"'

# open the preferred editor
function edit() {
  ST "$1"
}

# opens in Sublime Text
function ST() {
  open -a /Applications/Sublime\ Text.app/ "$1"
}
