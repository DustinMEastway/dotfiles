# dotfiles

Files used to set up a computer (mainly tested on MacOS, but contributions are welcome) with your preferred configuration.

## Acknowledgments

A big thanks to [holman](https://github.com/holman) for giving me a structured [dotfiles repository](https://github.com/holman/dotfiles) to model mine after.

## Command Keys

This repository uses configuration files to allow users to configure their machines in different ways.

It is recommended for new users to follow the [use](#use) section of this document and copy an existing environment instead of creating your own from scratch, but the below information can be used to modify an existing configuration or to create your own.

Note: The below information was pulled from the "source of truth" for what commands exist at `./scripts/commands/command-map.ts`.

* `brew-install` Allows the user to install a list of [Homebrew](https://brew.sh/) packages.
  - Example: To install the `dotnet` formulae using brew, add the following to your `config.json`.
    ```json
    {
      "key": "brew-install",
      "value": {
        "items": [
          "dotnet"
        ]
      }
    }
    ```
  - Example: To install the [cask formulae](https://formulae.brew.sh/cask/) `raycast` using brew, add the following to your `config.json`.
    ```json
    {
      "key": "brew-install",
      "value": {
        "args": "--cask",
        "items": [
          "raycast"
        ]
      }
    }
    ```
* `brew-tap` Allows user to [brew tap](https://docs.brew.sh/Taps) repositories.
  - Example: To tap the `mongodb/brew` repository, add the following to your `config.json`.
    ```json
    {
      "key": "brew-tap",
      "value": {
        "items": [
          "mongodb/brew"
        ]
      }
    }
    ```
* `brew-sync` Automatically stores the installed brew items on your machine to its respective `config.json` file.
  - Example: To keep your `confi.json` brew items synced with those installed on your machime, add the following to 
  your `config.json` (after your `brew-tap` or `brew-install` if they are being utilized).
  ```json
    {
      "key": "brew-sync",
    }
    ```
* `git-setup` Creates a global [gitconfig](https://git-scm.com/docs/git-config) file.
  - Example: To create a private git config file, add the following to your `config.json`.
    ```json
    {
      "key": "git-setup",
      "value": { "configPath": "./private/git/symlink.gitconfig" }
    }
    ```
* `mkdir` Makes a directory and any missing intermediate directories.
  - Example: To make a `./private/.ssh/` (with relation to your `fileRoot`) directory, add the following to your `config.json`.
    ```json
    {
      "key": "mkdir",
      "value": "./private/.ssh/"
    }
    ```
* `ssh-keygen` Generates an SSH public and private key if the key does not already exist.
  - Warning: SSH keys should always be generated inside of a directory named `private` in your environment and should never be added to Git.
  - Example: To create a SSH key at `./private/.ssh/id_rsa` (with relation to your `fileRoot`), add the following to your `config.json`.
    ```json
    {
      "key": "ssh-keygen",
      "value": {
        "file": "./private/.ssh/id_rsa",
        "type": "rsa"
      }
    }
    ```
* `symlink` Symlink a file or directory to another location.
  - Example: To symlink `./common/sh/aliases.symlink.sh` (with relation to your `fileRoot`) to `~/.aliases-common.sh`, add the following to your `config.json`.
    ```json
    {
      "key": "symlink",
      "value": [
        {
          "file": "./common/sh/aliases.symlink.sh",
          "link": "~/.aliases-common.sh"
        }
      ]
    }
    ```
* `write-defaults` Runs the MacOS `defaults` command to write system settings.
  - Example: To set the value of `ApplePressAndHoldEnabled` in the `Apple Global Domain` domain to `false`, add the following to your `config.json`.
    ```json
    {
      "key": "write-defaults",
      "value": {
        "Apple Global Domain": {
          "ApplePressAndHoldEnabled": false
        }
      }
    }
    ```

## Use

It is recommended to create a copy of the `DustinMEastway` directory in `./environments` and rename it to your GitHub username.

Once you have your own environments directory, feel free to remove and modify any of the configuration files. To see a list of valid `key` values for `commands` in your `config.json` look in the [command keys](#command-keys) section of this document.

Once you are happy with your `config.json`, then you can run it from the root of this repositoy by running the following command (after replacing the path for the config file of course).
```bash
./scripts/bootstrap.sh --config ./environments/DustinMEastway/home-macos/config.json
```

Once that is working, then I recommend creating an alias that allows you to run the above command from anywhere on your machine by doing the following.
- Note: If you copied the `DustinMEastway` environment, then you likely already have an alias called `dotfiles` to run the above script, you just need to replace the values for the below environment variables in your `env.symlink.sh` files.
1. Create a `DOTFILES_DIR` environment variable where this directory is.
    - Example: `export DOTFILES_DIR="$HOME/Sites/dotfiles"`
2. Create a `DOTFILES_CONFIG` environment variable where your config file is.
    - Example: `export DOTFILES_CONFIG='./environments/DustinMEastway/home-macos/config.json'`
3. Create a `dotfiles` (or other name) alias that uses the above two variables to run this repository with your config file.
    - Example: `alias dotfiles="$DOTFILES_DIR/scripts/bootstrap.sh --config $DOTFILES_CONFIG"`

### IF YOU GET SUBLIME PACKAGE CONTROL ERROR WITH libcrypto.dylib FILE
[github link](https://stackoverflow.com/questions/65202385/openssl-libcrypto-dylib-problem-with-package-control-in-sublime-text-3)
A lot of Homebrew packages require `openssl` and this can cause the problem you're seeing.

I fixed it by unlinking openssl: `brew unlink openssl` and restarting Sublime Text.
