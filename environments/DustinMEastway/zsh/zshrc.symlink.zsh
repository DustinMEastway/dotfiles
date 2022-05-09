# Add to PATH variable.
export PATH="/usr/local/opt/openssl/bin:$PATH"

# Load environmental variables.
if [[ -f "$HOME/.env.zsh" ]]
then
  source "$HOME/.env.zsh"
fi

# Load private environmental variables.
if [[ -f "$HOME/.env-private.zsh" ]]
then
  source "$HOME/.env-private.zsh"
fi

# Run common commands.
if [[ -f "$HOME/.common.sh" ]]
then
  source "$HOME/.common.sh"
fi

# Load aliases.
if [[ -f "$HOME/.aliases.zsh" ]]
then
  source "$HOME/.aliases.zsh"
fi
