# #!/usr/bin/env bash
# # # *** Environment variables *** #
# # if [[ -f "$HOME/.env-common.sh" ]]
# # then
# #   source "$HOME/.env-common.sh"
# # fi
# #
# # # *** Bin directories *** #
# # binDirectories=(
# #   "$HOME/.bin-common"
# #   "$HOME/.bin"
# #   "$HOME/.bin-private"
# # )
# #
# # # for key in "${!fruits[@]}"
# # for binDirectory in "${binDirectories[@]}"
# # do
# #   if [[ -d "$binDirectory" ]]
# #   then
# #     export PATH="$binDirectory:$PATH"
# #   fi
# # done
# #
# # # *** Add aliases *** #
# # if [[ -f "$HOME/.aliases-common.sh" ]]
# # then
# #   source "$HOME/.aliases-common.sh"
# # fi
# #
# # # *** Tools setup *** #
# # # Brew setup.
# # if [[ -d "/opt/homebrew/bin/" ]]
# # then
# #   eval "$(/opt/homebrew/bin/brew shellenv)"
# # elif [[ -d "/usr/local/bin/" ]]
# # then
# #   eval "$(/usr/local/bin/brew shellenv)"
# # fi
# #
# # # Pyenv setup.
# # if [[ "$(command -v pyenv)" != "" ]]
# # then
# #   PATH="$(pyenv root)/shims:$PATH"
# # fi
# #
# # # Ruby setup.
# # if [[ -d "$(brew --prefix)/opt/ruby/bin" ]]
# # then
# #   export PATH="$(brew --prefix)/opt/ruby/bin:$PATH"
# # fi
# #
# # # NVM setup.
# # export NVM_DIR="$HOME/.nvm"
# # # This loads NVM.
# # [ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && source "$(brew --prefix)/opt/nvm/nvm.sh"
# # # This loads NVM bash completion.
# # [ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && source "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"
#
# #!/usr/bin/env bash
#
# # Brew setup.
# # 1Password is used for env variables so brew has to be set up first.
# if [[ -d "/opt/homebrew/bin/" ]]
# then
#   eval "$(/opt/homebrew/bin/brew shellenv)"
# elif [[ -d "/usr/local/bin/" ]]
# then
#   eval "$(/usr/local/bin/brew shellenv)"
# fi
#
# # *** Environment variables *** #
# if [[ -f "$HOME/.env-common.sh" ]]
# then
#   source "$HOME/.env-common.sh"
# fi
#
# # *** Bin directories *** #
# binDirectories=(
#   "$HOME/.bin-common"
#   "$HOME/.bin"
#   "$HOME/.bin-private"
# )
#
# # for key in "${!fruits[@]}"
# for binDirectory in "${binDirectories[@]}"
# do
#   if [[ -d "$binDirectory" ]]
#   then
#     export PATH="$binDirectory:$PATH"
#   fi
# done
#
# # *** Add aliases *** #
# if [[ -f "$HOME/.aliases-common.sh" ]]
# then
#   source "$HOME/.aliases-common.sh"
# fi
#
# # *** Tools setup *** #
# # Pyenv setup.
# if [[ "$(command -v pyenv)" != "" ]]
# then
#   PATH="$(pyenv root)/shims:$PATH"
# fi
#
# # Ruby setup.
# if [[ -d "$(brew --prefix)/opt/ruby/bin" ]]
# then
#   export PATH="$(brew --prefix)/opt/ruby/bin:$PATH"
# fi
#
# # NVM setup.
# export NVM_DIR="$HOME/.nvm"
# # This loads NVM.
# [ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && source "$(brew --prefix)/opt/nvm/nvm.sh"
# # This loads NVM bash completion.
# [ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && source "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"
#
# ---
#!/usr/bin/env bash

# *** Brew setup - OPTIMIZED *** #
# Instead of eval which is slow, directly set the paths
if [[ -d "/opt/homebrew/bin/" ]]; then
  export HOMEBREW_PREFIX="/opt/homebrew"
  export HOMEBREW_CELLAR="/opt/homebrew/Cellar"
  export HOMEBREW_REPOSITORY="/opt/homebrew"
  export PATH="/opt/homebrew/bin:/opt/homebrew/sbin${PATH+:$PATH}"
  export MANPATH="/opt/homebrew/share/man${MANPATH+:$MANPATH}:"
  export INFOPATH="/opt/homebrew/share/info:${INFOPATH:-}"
elif [[ -d "/usr/local/bin/" ]]; then
  export HOMEBREW_PREFIX="/usr/local"
  export HOMEBREW_CELLAR="/usr/local/Cellar"
  export HOMEBREW_REPOSITORY="/usr/local/Homebrew"
  export PATH="/usr/local/bin:/usr/local/sbin${PATH+:$PATH}"
  export MANPATH="/usr/local/share/man${MANPATH+:$MANPATH}:"
  export INFOPATH="/usr/local/share/info:${INFOPATH:-}"
fi

# *** Environment variables *** #
if [[ -f "$HOME/.env-common.sh" ]]; then
  source "$HOME/.env-common.sh"
fi

# *** Bin directories *** #
binDirectories=(
  "$HOME/.bin-common"
  "$HOME/.bin"
  "$HOME/.bin-private"
)

for binDirectory in "${binDirectories[@]}"; do
  if [[ -d "$binDirectory" ]]; then
    export PATH="$binDirectory:$PATH"
  fi
done

# *** Add aliases *** #
if [[ -f "$HOME/.aliases-common.sh" ]]; then
  source "$HOME/.aliases-common.sh"
fi

# *** Tools setup *** #

# Pyenv setup - OPTIMIZED
if command -v pyenv >/dev/null 2>&1; then
  export PYENV_ROOT="$HOME/.pyenv"
  export PATH="$PYENV_ROOT/shims:$PATH"
fi

# Ruby setup - OPTIMIZED (use cached path)
if [[ -d "/opt/homebrew/opt/ruby/bin" ]]; then
  export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
elif [[ -d "/usr/local/opt/ruby/bin" ]]; then
  export PATH="/usr/local/opt/ruby/bin:$PATH"
fi

# NVM setup - LAZY LOAD (this is the big speed improvement!)
export NVM_DIR="$HOME/.nvm"

# Instead of loading NVM immediately, create lazy-load functions
# NVM will only load when you actually use node/npm/nvm
nvm() {
  unset -f nvm node npm npx
  [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && source "$NVM_DIR/bash_completion"
  nvm "$@"
}

node() {
  unset -f nvm node npm npx
  [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && source "$NVM_DIR/bash_completion"
  node "$@"
}

npm() {
  unset -f nvm node npm npx
  [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && source "$NVM_DIR/bash_completion"
  npm "$@"
}

npx() {
  unset -f nvm node npm npx
  [ -s "$NVM_DIR/nvm.sh" ] && source "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && source "$NVM_DIR/bash_completion"
  npx "$@"
}
