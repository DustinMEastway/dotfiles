return {
  -- {
  --   'stevearc/conform.nvim',
  --   event = 'BufWritePre',
  --   config = function()
  --     require 'configs.conform'
  --   end,
  -- },
  {
    'dense-analysis/ale',
    config = function()
      -- Configuration goes here.
      local g = vim.g

      g.ale_ruby_rubocop_auto_correct_all = 1

      g.ale_linters = {
        deno = { 'deno' },
      }
    end,
  },

  -- {
  --   'neovim/nvim-lspconfig',
  --   config = function()
  --     require('nvchad.configs.lspconfig').defaults()
  --     require 'configs.lspconfig'
  --   end,
  -- },
  {

    'L3MON4D3/LuaSnip',
    -- follow latest release.
    version = 'v2.*', -- Replace <CurrentMajor> by the latest released major (first number of latest release)
    -- install jsregexp (optional!).
    build = 'make install_jsregexp',
  },

  -- {
  --   'williamboman/mason.nvim',
  --   opts = {
  --     ensure_installed = {
  --       'css-lsp',
  --       'deno',
  --       'lua-language-server',
  --       'eslint-lsp',
  --       'html-lsp',
  --       'gopls',
  --       'prettier',
  --       'stylua',
  --       'typescript-language-server',
  --     },
  --   },
  -- },

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
    -- {
    --   'github/copilot.vim',
    --   config = function()
    --     vim.g.copilot_node_command = 'node' -- Set the path to the node command if not in $PATH
    --   end,
    --   event = 'BufEnter',
    -- },
    {
      'mg979/vim-visual-multi',
      event = 'BufEnter',
      setup = function()
        -- Update the default mappings to use <C-d> instead of <C-n>
        vim.g.VM_maps = { select = '<C-d>', start = '<C-d>' }
      end,
    },
  },
}
