return {
  'akinsho/bufferline.nvim',
  version = '*',
  dependencies = 'nvim-tree/nvim-web-devicons',
  config = function()
    require('bufferline').setup {
      options = {
        diagnostics = 'nvim_lsp',
      },
    }

    vim.keymap.set('n', '<C-S-[>', ':bprevious<CR>', { silent = true })
    vim.keymap.set('n', '<C-S-]>', ':bNext<CR>', { silent = true })
    vim.keymap.set(
      'n',
      '<C-S-T>',
      ':e #<CR>',
      { silent = true, desc = 'Reopen last buffer.' }
    )
    vim.keymap.set(
      'n',
      '<leader>gb',
      ':BufferLinePick<CR>',
      { silent = true, desc = 'Switch buffer.' }
    )
    vim.keymap.set(
      'n',
      '<leader>db',
      ':BufferLinePickClose<CR>',
      { silent = true, desc = 'Delete buffer.' }
    )
  end,
}
