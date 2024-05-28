# Adding Plugins

To add a plugin, simply add a new `.lua` to the `/plugins` directory.
In the file, return a new lua table with the first key being the plugin's link
(or for a github repo: 'owner/repo' link).

Save the file.then, reopen neovim and you will see `Lazy` open to install the
plugins.

Wait for the plugins to install, then either press `q` or `:q` to close the lazy
popup.

That's it! You can now use the plugin with the default settings, or you can add
configuration options listed below.

## Configuration Settings

Use `opts = {}` to force a plugin to be loaded.

Plugins can also be configured to run Lua code when they are loaded.

This is often useful to both group configuration, as well as handle
lazy loading plugins that don't need to be loaded immediately at startup.

For example, in the following configuration, we use:
`event = 'VimEnter'`

which loads which-key before all the UI elements are loaded. Events can be
normal autocommands events (`:help autocmd-events`).

Then, because we use the `config` key, the configuration only runs
after the plugin has been loaded:
`config = function() ... end`

```lua
{ -- Useful plugin to show you pending keybinds.
   'folke/which-key.nvim',
   event = 'VimEnter', -- Sets the loading event to 'VimEnter'
   config = function() -- This is the function that runs, AFTER loading
     require('which-key').setup()

     -- Document existing key chains
     require('which-key').register {
       ['<leader>c'] = { name = '[C]ode', _ = 'which_key_ignore' },
       ['<leader>d'] = { name = '[D]ocument', _ = 'which_key_ignore' },
       ['<leader>r'] = { name = '[R]ename', _ = 'which_key_ignore' },
       ['<leader>s'] = { name = '[S]earch', _ = 'which_key_ignore' },
       ['<leader>w'] = { name = '[W]orkspace', _ = 'which_key_ignore' },
       ['<leader>t'] = { name = '[T]oggle', _ = 'which_key_ignore' },
       ['<leader>h'] = { name = 'Git [H]unk', _ = 'which_key_ignore' },
       ['<C-w>t'] = { name = '[T]erminal', _ = 'which_key_ignore' },
     }
     -- visual mode
     require('which-key').register({
       ['<leader>h'] = { 'Git [H]unk' },
     }, { mode = 'v' })
   end,
 },
```

## Plugin Dependencies

Plugins can specify dependencies.

The dependencies are proper plugin specifications as well - anything you do for
a plugin at the top level, you can do for a dependency.

Use the `dependencies` key to specify the dependencies of a particular plugin.
