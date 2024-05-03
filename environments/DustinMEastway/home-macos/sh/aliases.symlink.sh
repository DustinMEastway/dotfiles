#!/usr/bin/env bash

# *** Media aliases *** #
alias calibredb='/Applications/calibre.app/Contents/MacOS/calibredb'
alias cdCalibre='cd ~/Documents/Books/Calibre\ Library/'
alias cdIBooks='cd ~/Library/Containers/com.apple.BKAgentService/Data/Documents/iBooks'
alias cdKindle='cd ~/Library/Application\ Support/Kindle/My\ Kindle\ Content'
alias cdNotes='cd ~/Library/Mobile\ Documents/iCloud\~md\~obsidian/Documents/second-brain'
alias nCopy="rsync -r --exclude={'*.gitignore*','.git'} \"\$NOTES_SYNC_PATH\" \"\$NOTES_PATH\""
alias nReverse="rsync -r --exclude={'*.gitignore*','.git'} \"\$NOTES_PATH\" \"\$NOTES_SYNC_PATH\""
alias openICloud='open ~/Library/Mobile\ Documents/com~apple~CloudDocs/'

# *** Mongodb aliases *** #
alias mongoConfig='function _() { edit $(brew --prefix)/etc/mongod.conf }; _'
alias mongoRestart='brew services restart mongodb-community'
alias mongoStart='brew services start mongodb-community'
alias mongoStop='brew services stop mongodb-community'
