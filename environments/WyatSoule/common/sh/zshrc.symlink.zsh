# Run common commands.
if [[ -f "$HOME/.common.sh" ]]
then
  source "$HOME/.common.sh"
fi

# bun completions
[ -s "/Users/wsoule/.bun/_bun" ] && source "/Users/wsoule/.bun/_bun"

# bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
