return {
  {
    'tpope/vim-dadbod',
    dependencies = {
      'kristijanhusak/vim-dadbod-completion',
      'kristijanhusak/vim-dadbod-ui',
    },
    config = function()
      -- Dadbod UI keymaps
      vim.keymap.set('n', '<leader>du', ':DBUIToggle<CR>', { silent = true, desc = '[D]B [U]I toggle' })
      vim.keymap.set('n', '<leader>df', ':DBUIFindBuffer<CR>', { silent = true, desc = '[D]B [F]ind buffer' })
      vim.keymap.set('n', '<leader>dr', ':DBUIRenameBuffer<CR>', { silent = true, desc = '[D]B [R]ename buffer' })
      vim.keymap.set('n', '<leader>dq', ':DBUILastQueryInfo<CR>', { silent = true, desc = '[D]B last [Q]uery info' })
    end,
  },
}
