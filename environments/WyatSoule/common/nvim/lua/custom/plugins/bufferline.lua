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

    -- Buffer navigation
    vim.keymap.set('n', '<S-h>', ':bprevious<CR>', { silent = true, desc = 'Previous buffer' })
    vim.keymap.set('n', '<S-l>', ':bnext<CR>', { silent = true, desc = 'Next buffer' })
    vim.keymap.set(
      'n',
      '<leader>bp',
      ':BufferLinePick<CR>',
      { silent = true, desc = '[B]uffer [P]ick' }
    )

    -- Buffer management
    vim.keymap.set(
      'n',
      '<leader>bc',
      ':BufferLinePickClose<CR>',
      { silent = true, desc = '[B]uffer [C]lose (pick)' }
    )
    vim.keymap.set(
      'n',
      '<leader>bx',
      ':%bd|e#|bd#<CR>',
      { silent = true, desc = '[B]uffer close all but current' }
    )
    vim.keymap.set(
      'n',
      '<leader>bh',
      ':BufferLineCloseLeft<CR>',
      { silent = true, desc = '[B]uffer close all to left' }
    )
    vim.keymap.set(
      'n',
      '<leader>bl',
      ':BufferLineCloseRight<CR>',
      { silent = true, desc = '[B]uffer close all to right' }
    )
  end,
}
