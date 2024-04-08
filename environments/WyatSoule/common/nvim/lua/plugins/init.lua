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
        'eslint-lsp',
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
      auto_install = true,
      ensure_installed = {
        'vim',
        'lua',
        'vimdoc',
        'html',
        'css',
        'typescript',
        'go',
        'jsdoc',
        'json',
      },
    },
    {
      'github/copilot.vim',
      event = 'VimEnter',
      orts = {
        lazy = true,
      },
      config = function()
        vim.g.copilot_node_command = 'node' -- Set the path to the node command if not in $PATH
      end,
    },
  },
}
