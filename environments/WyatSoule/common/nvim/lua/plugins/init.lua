return {
  {
    'stevearc/conform.nvim',
    event = 'BufWritePre',
    config = function()
      require 'configs.conform'
    end,
  },

  {
    'neovim/nvim-lspconfig',
    config = function()
      require('nvchad.configs.lspconfig').defaults()
      require 'configs.lspconfig'
    end,
  },

  {
    'williamboman/mason.nvim',
    opts = {
      ensure_installed = {
        'css-lsp',
        'lua-language-server',
        'eslint_d',
        'html-lsp',
        'gopls',
        'prettier',
        'stylua',
        'typescript-language-server',
      },
    },
  },

  {
    'nvim-treesitter/nvim-treesitter',
    opts = {
      ensure_installed = {
        'vim',
        'lua',
        'vimdoc',
        'html',
        'css',
        'typescript',
        'go',
      },
    },
  },
}
