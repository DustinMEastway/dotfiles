return {
  'supermaven-inc/supermaven-nvim',
  event = 'InsertEnter',
  config = function()
    require('supermaven-nvim').setup {
      keymaps = {
        accept_suggestion = '<C-Tab>',
        clear_suggestion = '<C-]>',
        accept_word = '<C-j>',
      },
    }
  end,
}
