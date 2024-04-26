return {
  'folke/zen-mode.nvim',
  opts = {
    -- your configuration comes here
    -- or leave it empty to use the default settings
    -- refer to the configuration section below
    plugins = {
      options = {
        laststatus = 3,
      },
    },
  },
  config = function()
    vim.keymap.set(
      'n',
      '<leader>tz',
      ':ZenMode<CR>',
      { desc = '[T]oggle [z]enmode.' }
    )
  end,
}
