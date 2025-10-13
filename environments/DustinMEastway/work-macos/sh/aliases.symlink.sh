#!/usr/bin/env bash
alias dockerCleanup='sudo docker system prune -a -f && docker volume rm $(docker volume ls -qf dangling=true)'
alias sshDev='ssh deastway@dev.d2.interactions.net'
alias sshUat1='ssh deastway@uat1.d2.interactions.net'
alias sshUat2='ssh deastway@uat2.d2.interactions.net'
alias java11='/opt/homebrew/opt/openjdk@11/bin/java'
alias javac11='/opt/homebrew/opt/openjdk@11/bin/javac'
alias workflowSql="psql 'postgresql://$WORKFLOW_DB_USER:$WORKFLOW_DB_PASSWORD@$WORKFLOW_DB_URL'"
