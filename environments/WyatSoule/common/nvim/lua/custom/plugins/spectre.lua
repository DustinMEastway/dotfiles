return {
  'nvim-pack/nvim-spectre',
  dependencies = { 'nvim-lua/plenary.nvim' },
  config = function()
    vim.keymap.set(
      'n',
      '<leader>ts',
      '<cmd>lua require("spectre").toggle()<CR>',
      {
        desc = '[T]oggle [s]pectre',
      }
    )
    vim.keymap.set(
      'n',
      '<leader>Fw',
      '<cmd>lua require("spectre").open_visual({select_word=true})<CR>',
      {
        desc = '[F]ind current word',
      }
    )
    vim.keymap.set(
      'v',
      '<leader>Fw',
      '<esc><cmd>lua require("spectre").open_visual()<CR>',
      {
        desc = '[F]ind current word',
      }
    )
    vim.keymap.set(
      'n',
      '<leader>Fp',
      '<cmd>lua require("spectre").open_file_search({select_word=true})<CR>',
      {
        desc = '[F]ind on current file',
      }
    )
  end,
}
