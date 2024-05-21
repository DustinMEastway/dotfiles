return {
  'folke/persistence.nvim',
  event = 'BufReadPre', -- this will only start session saving when an actual file was opened
  opts = {
    -- add any custom options here
  },
  init = function()
    -- Restore the session for the current directory.
    vim.api.nvim_set_keymap(
      'n',
      '<leader>pc',
      [[<cmd>lua require("persistence").load()<cr>]],
      { desc = 'Restore session for current directory.' }
    )

    -- Restore the last session.
    vim.api.nvim_set_keymap(
      'n',
      '<leader>pl',
      [[<cmd>lua require("persistence").load({ last = true })<cr>]],
      { desc = 'Restore last session.' }
    )

    -- Stop Persistence => session won't be saved on exit.
    vim.api.nvim_set_keymap(
      'n',
      '<leader>ps',
      [[<cmd>lua require("persistence").stop()<cr>]],
      { desc = 'Stop Persistence.' }
    )
  end,
}
