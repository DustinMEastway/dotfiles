#!/usr/bin/env bash

# *** Media aliases *** #
alias calibredb='/Applications/calibre.app/Contents/MacOS/calibredb'
alias cdCalibre='cd ~/Documents/Books/Calibre\ Library/'
alias openICloud='open ~/Library/Mobile\ Documents/com~apple~CloudDocs/'

# *** Mongodb aliases *** #
alias mongoConfig='function _() { edit $(brew --prefix)/etc/mongod.conf }; _'
alias mongoRestart='brew services restart mongodb-community'
alias mongoStart='brew services start mongodb-community'
alias mongoStop='brew services stop mongodb-community'
