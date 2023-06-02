aliasSource=$0
#show and hide hidden files
alias hideHiddenFiles='defaults write com.apple.finder AppleShowAllFiles NO; killall Finder'
alias showHiddenFiles='defaults write com.apple.finder AppleShowAllFiles YES; killall Finder'

#turn on and off repeating keyboard presses
alias repeatOn='defaults write com.sublimetext.4 ApplePressAndHoldEnabled -bool false'
alias repeatOff='defaults write com.sublimetext.4 ApplePressAndHoldEnabled -bool true'
alias repeatAllOn='defaults write -g ApplePressAndHoldEnabled -bool false'
alias repeatAllOff='defaults write -g ApplePressAndHoldEnabled -bool true'


#edit aliases
alias aEdit='edit "$aliasSource"'
#reload aliases
alias aReload='unalias -a; source $aliasSource'
#gits status
alias gitS='cls; cls; git branch && git status'
#clear terminal
alias cls='clear'
#make directory with verbose and ability to make subdirectories
alias mkdir='mkdir -pv'
#run dotfiles command
alias dotfiles='cls; cls;  cd ~/Sites/dotfiles/ && git pull && scripts/bootstrap.sh --config ./environments/WyatSoule/macos-config.json'
#show slashes indicators on ls
alias ls='ls -F'

#opens sublime text to edit
function edit(){
    open -a /Applications/Sublime\ Text.app "$1"
}
# update brew and applications installed with brew
alias updateAll='brew update; brew upgrade;'

function runCpp(){
    outName="${1/.cpp/}"
    nodemon --exec "clear && g++ $1 -o $outName && $outName" --watch "$1"
}