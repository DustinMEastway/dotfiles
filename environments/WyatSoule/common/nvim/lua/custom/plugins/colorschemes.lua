return { -- You can easily change to a different colorscheme.
  -- Change the name of the colorscheme plugin below, and then
  -- change the command in the config to whatever the name of that colorscheme is.
  --
  -- If you want to see what colorschemes are already installed, you can use `:Telescope colorscheme`.
  'folke/tokyonight.nvim',
  -- 'catppuccin/nvim',
  -- 'rebelot/kanagawa.nvim',
  priority = 1000, -- Make sure to load this before all the other start plugins.
  init = function()
    require('tokyonight').setup {
      transparent = true,
      style = 'night', -- Options: 'storm', 'moon', 'night', 'day'
    }
    -- Load the colorscheme here.
    -- Available variants: 'tokyonight-night', 'tokyonight-storm', 'tokyonight-moon', 'tokyonight-day'
    vim.cmd.colorscheme 'tokyonight-night'

    -- You can configure highlights by doing something like:
    vim.cmd.hi 'Comment gui=none'
  end,
}
