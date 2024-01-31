#!/usr/bin/env bash

# *** Media aliases *** #
alias calibredb='/Applications/calibre.app/Contents/MacOS/calibredb'
alias cdCalibre='cd ~/Documents/Books/Calibre\ Library/'
alias openICloud='open ~/Library/Mobile\ Documents/com~apple~CloudDocs/'


# *** Brew service functions *** #
function service() {
  case "$1" in
    start)
      brew services start $2
      ;;
    stop)
      brew services stop $2
      ;;
    restart)
      brew services restart $2
      ;;
    *)
      echo "Usage: {start|stop|restart}"
      ;;
  esac
}

# *** PostgreSQL *** #
function pg() {
  service $1 postgresql
}

# *** MongoDB *** #
function mg() {
  service $1 mongodb-community
}
alias mongoConfig='function _() { edit $(brew --prefix)/etc/mongod.conf }; _'