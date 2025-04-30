#!/usr/bin/env bash
alias dockerCleanup='sudo docker system prune -a -f && docker volume rm $(docker volume ls -qf dangling=true)'
alias npmU='npm uninstall --legacy-peer-deps'
alias sshDev='ssh deastway@dev.d2.interactions.net'
alias sshUat1='ssh deastway@uat1.d2.interactions.net'
alias sshUat2='ssh deastway@uat2.d2.interactions.net'
