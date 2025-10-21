return {
  'nvim-pack/nvim-spectre',
  dependencies = { 'nvim-lua/plenary.nvim' },
  keys = {
    {
      '<leader>ts',
      '<cmd>lua require("spectre").toggle()<CR>',
      desc = '[T]oggle [s]pectre',
    },
    {
      '<leader>Fw',
      '<cmd>lua require("spectre").open_visual({select_word=true})<CR>',
      desc = '[F]ind current word',
    },
    {
      '<leader>Fw',
      '<esc><cmd>lua require("spectre").open_visual()<CR>',
      mode = 'v',
      desc = '[F]ind current word',
    },
    {
      '<leader>Fp',
      '<cmd>lua require("spectre").open_file_search({select_word=true})<CR>',
      desc = '[F]ind on current file',
    },
  },
}
