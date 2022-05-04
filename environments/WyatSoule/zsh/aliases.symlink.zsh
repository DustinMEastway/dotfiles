aliasSource=$0
#show and hide hidden files
alias hideHiddenFiles='defaults write com.apple.finder AppleShowAllFiles NO; killall Finder'
alias showHiddenFiles='defaults write com.apple.finder AppleShowAllFiles YES; killall Finder'

#edit aliases
alias aEdit='edit "$aliasSource"'
#reload aliases
alias aReload='unalias -a; source $aliasSource'
#gits status
alias gitS='git branch && git status'
#clear terminal
alias cls='clear'
#make directory with verbose and ability to make subdirectories
alias mkdir='mkdir -pv'
#run dotfiles command
alias dotfiles='cls; cls; ~/Sites/dotfiles/scripts/bootstrap.sh --config ./environments/WyatSoule/macos-config.json'
function edit(){
    open -a /Applications/Visual\ Studio\ Code.app "$1"
}