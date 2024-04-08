local on_attach = require('nvchad.configs.lspconfig').on_attach
local on_init = require('nvchad.configs.lspconfig').on_init
local capabilities = require('nvchad.configs.lspconfig').capabilities

local lspconfig = require 'lspconfig'
local servers = { 'html', 'cssls', 'gopls' }

-- Setup signature help to appear above the cursor
vim.lsp.handlers['textDocument/signatureHelp'] = vim.lsp.with(vim.lsp.handlers.signature_help, {
  -- Customize the border or other options here
  border = 'rounded',
  focusable = false,
  relative = 'cursor', -- This makes it appear above the cursor
  anchor = 'S', -- This makes the float anchor to the south of the cursor position
  position = 'above', -- Try to place it above the cursor
})

local function setup_signature_help(client, bufnr)
  if client.server_capabilities.signatureHelpProvider then
    vim.api.nvim_create_autocmd({ 'CursorHoldI', 'CursorMovedI' }, {
      buffer = bufnr,
      callback = function()
        local params = vim.lsp.util.make_position_params()
        vim.lsp.buf_request(bufnr, 'textDocument/signatureHelp', params)
      end,
    })
  end
end
-- lsps with default config
for _, lsp in ipairs(servers) do
  lspconfig[lsp].setup {
    on_attach = on_attach,
    on_init = on_init,
    capabilities = capabilities,
  }
end

-- typescript
lspconfig.tsserver.setup {
  on_attach = function(client, bufnr)
    on_attach(client, bufnr) -- Call the default on_attach from NvChad
    setup_signature_help(client, bufnr)
  end,
  on_init = on_init,
  capabilities = capabilities,
}

lspconfig.eslint.setup {
  on_attach = function(client, bufnr)
    vim.api.nvim_create_autocmd('BufWritePre', {
      buffer = bufnr,
      callback = function()
        vim.cmd 'EslintFixAll'
      end,
    })
  end,
}
