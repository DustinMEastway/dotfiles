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

    'L3MON4D3/LuaSnip',
    -- follow latest release.
    version = 'v2.*', -- Replace <CurrentMajor> by the latest released major (first number of latest release)
    -- install jsregexp (optional!).
    build = 'make install_jsregexp',
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
        'css',
        'go',
        'graphql',
        'html',
        'lua',
        'jsdoc',
        'json',
        'typescript',
        'vim',
        'vimdoc',
      },
    },
    {
      'github/copilot.vim',
      event = 'VimEnter',
      config = function()
        vim.g.copilot_node_command = 'node' -- Set the path to the node command if not in $PATH
      end,
    },
    {
      'mg979/vim-visual-multi',
      event = 'BufEnter',
      setup = function()
        vim.g.VM_maps = 0
      end,
    },
  },
}
