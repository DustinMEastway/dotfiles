# Run common commands.
if [[ -f "$HOME/.common.sh" ]]
then
  source "$HOME/.common.sh"
fi

# The next line updates PATH for the Google Cloud SDK.
if [ -f '/Users/deastway/Sites/agent-factory/google-cloud-sdk/path.zsh.inc' ]; then . '/Users/deastway/Sites/agent-factory/google-cloud-sdk/path.zsh.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '/Users/deastway/Sites/agent-factory/google-cloud-sdk/completion.zsh.inc' ]; then . '/Users/deastway/Sites/agent-factory/google-cloud-sdk/completion.zsh.inc'; fi
