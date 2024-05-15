#!/usr/bin/env bash

# *** Mongodb aliases *** #
alias mongoConfig='function _() { edit $(brew --prefix)/etc/mongod.conf }; _'
alias mongoRestart='brew services restart mongodb-community'
alias mongoStart='brew services start mongodb-community'
alias mongoStop='brew services stop mongodb-community'

alias cdNotes='cd "$NOTES_PATH"'

alias cdMSU='cd $HOME//Library/Mobile\ Documents/iCloud~md~obsidian/Documents/second-brain/Database/Note/Classes/MSU'