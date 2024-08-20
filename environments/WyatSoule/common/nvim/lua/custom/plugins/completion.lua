return { -- Autocompletion
  'hrsh7th/nvim-cmp',
  lazy = false,
  priority = 100,
  dependencies = {
    'neovim/nvim-lspconfig',
    'onsails/lspkind.nvim',
    'hrsh7th/cmp-nvim-lsp',
    'hrsh7th/cmp-path',
    'hrsh7th/cmp-buffer',
    'hrsh7th/cmp-nvim-lsp-signature-help',
    'hrsh7th/cmp-cmdline',
    { 'zbirenbaum/copilot-cmp', dependencies = 'zbirenbaum/copilot.lua' }, -- Add Copilot source

    -- Snippet Engine & its associated nvim-cmp source
    {
      'L3MON4D3/LuaSnip',
      build = (function()
        -- Build Step is needed for regex support in snippets.
        -- This step is not supported in many windows environments.
        -- Remove the below condition to re-enable on windows.
        if vim.fn.has 'win32' == 1 or vim.fn.executable 'make' == 0 then
          return
        end
        return 'make install_jsregexp'
      end)(),
      dependencies = {
        -- `friendly-snippets` contains a variety of premade snippets.
        --    See the README about individual language/framework/plugin snippets:
        --    https://github.com/rafamadriz/friendly-snippets
        {
          'rafamadriz/friendly-snippets',
          config = function()
            require('luasnip.loaders.from_vscode').lazy_load()
          end,
        },
      },
    },

    -- Adds other completion capabilities.
    --  nvim-cmp does not ship with all sources by default. They are split
    --  into multiple repos for maintenance purposes.
    'saadparwaiz1/cmp_luasnip',
  },
  config = function()
    require 'custom.completion'
    local cmp = require 'cmp'
    cmp.setup {
      -- Your existing setup
      sources = {
        -- Copilot Source
        { name = 'copilot', group_index = 2 },
        -- Other Sources
        { name = 'nvim_lsp', group_index = 2 },
        { name = 'path', group_index = 2 },
        { name = 'luasnip', group_index = 2 },
      },
    }
  end,
}
