require 'nvchad.mappings'

-- add yours here

local map = vim.keymap.set

map('n', ';', ':', { desc = 'CMD enter command mode' })
map('i', 'jk', '<ESC>')
-- map({ "n", "i", "v" }, "<C-s>", "<cmd> w <cr>")
-- rename using lsp
map('n', '<leader>rr', '<cmd>lua vim.lsp.buf.rename()<CR>', { desc = 'Rename using LSP' })
-- disable copilot
map('n', '<leader>cpd', '<cmd>Copilot disable<CR>', { desc = 'Disable Copilot' })
-- enable copilot
map('n', '<leader>cpe', '<cmd>Copilot enable<CR>', { desc = 'Enable Copilot' })
-- open copilot
map('n', '<leader>co', '<cmd>Copilot panel<CR>', { desc = 'Open Copilot' })
-- copy current file path
map('n', '<leader>cf', '<cmd>let @*=expand("%:p")<CR>', { desc = 'Copy current file path' })
-- update vim visual multi to be control d
map('n', '<C-d>', '<Plug>(VM-Find-Under)', { desc = 'Start Visual Multi' })
