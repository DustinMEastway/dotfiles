#!/usr/bin/env bash

# *** Media aliases *** #
alias calibredb='/Applications/calibre.app/Contents/MacOS/calibredb'
alias cdCalibre='cd ~/Documents/Books/Calibre\ Library/'
alias cdIBooks='cd ~/Library/Containers/com.apple.BKAgentService/Data/Documents/iBooks'
alias cdKindle='cd ~/Library/Application\ Support/Kindle/My\ Kindle\ Content'
alias cdMc='cd ~/Documents/curseforge/minecraft/Instances/'
alias cdMcServer='cd ~/Media/games/minecraft/dme-pixelmod-1.1-server/'
alias openICloud='open ~/Library/Mobile\ Documents/com~apple~CloudDocs/'
alias ytDownload='yt-dlp --cookies-from-browser brave --output "%(title)s.%(ext)s"'

# *** Code aliases *** #
alias mongoConfig='function _() { edit $(brew --prefix)/etc/mongod.conf }; _'
alias mongoRestart='brew services restart mongodb-community'
alias mongoStart='brew services start mongodb-community'
alias mongoStop='brew services stop mongodb-community'
