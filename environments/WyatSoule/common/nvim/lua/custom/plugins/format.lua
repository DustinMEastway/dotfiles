return { -- Autoformat
  'stevearc/conform.nvim',
  keys = {
    {
      '<leader>f',
      function()
        require('conform').format { async = true, lsp_fallback = true }
      end,
      mode = '',
      desc = '[F]ormat buffer',
    },
  },
  opts = {
    notify_on_error = false,
    -- Disable format on save globally - use <leader>f to format manually
    -- To enable per-project, create a .nvim.lua file with:
    -- vim.api.nvim_create_autocmd("BufWritePre", {
    --   callback = function() require("conform").format({ lsp_fallback = true }) end
    -- })
    formatters_by_ft = {
      lua = { 'stylua' },
      astro = { 'prettierd' },
      javascript = { 'prettierd' },
      javascriptreact = { 'prettierd' },
      typescript = { 'prettierd' },
      typescriptreact = { 'prettierd' },
      svelte = { 'prettierd' },
      css = { 'prettierd' },
      html = { 'prettierd' },
      json = { 'prettierd' },
      yaml = { 'prettierd' },
      markdown = { 'prettierd' },
      graphql = { 'prettierd' },
      python = { 'isort', 'black' },
      go = { 'goimports', 'gofmt' },
      ruby = { 'rubocop' },
    },
  },
}
