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
    vim.keymap.set('n', '<C-S-T>', ':e #<CR>', { silent = true })
    vim.keymap.set('n', '<leader>bp', ':BufferLinePick<CR>', { silent = true})
    vim.keymap.set('n', '<leader>bc', ':BufferLinePickClose<CR>', { silent = true})
  end,
}
