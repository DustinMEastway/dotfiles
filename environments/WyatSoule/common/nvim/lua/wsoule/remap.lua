-- Open file view (bigger neotree).
vim.keymap.set('n', '<leader>pv', vim.cmd.Ex)
-- Move selected text - ThePrimeagen.
vim.keymap.set('v', 'J', ":m '>+1<CR>gv=gv")
vim.keymap.set('v', 'K', ":m '<-2<CR>gv=gv")
-- Keep curor where it was when doing J - ThePrimeagen.
vim.keymap.set('n', 'J', 'mzJ`z')
-- Move up or down 50 lines - ThePrimeagen.
vim.keymap.set('n', '<C-d>', '<C-d>zz')
vim.keymap.set('n', '<C-u>', '<C-u>zz')

-- Keep search terms in the middle of the screen - ThePrimeagen.
vim.keymap.set('n', 'n', 'nzzzv')
vim.keymap.set('n', 'N', 'Nzzzv')

-- Keep p reserved when pasting over something - ThePrimeagen.
vim.keymap.set('x', '<leader>p', '"_dP')

-- Yank things into clipboard - asbjornHaland.
vim.keymap.set('n', '<leader>y', '"+y', { desc = 'Copy into clipboard.' })
vim.keymap.set(
  'v',
  '<leader>y',
  '"+y',
  { desc = 'Copy highlighted text into clipboard.' }
)
vim.keymap.set('n', '<leader>Y', '"+Y')

vim.keymap.set(
  'n',
  '<leader>d',
  '"_d',
  { desc = 'Copy deleted text into clipboard.' }
)
vim.keymap.set(
  'v',
  '<leader>d',
  '"_d',
  { desc = 'Copy highlighted deleted text into clipboard' }
)

vim.keymap.set('i', '<C-c>', '<Esc>')

vim.keymap.set('n', 'Q', '<nop>')
-- vim.keymap.set('n', '<C-f>', '<cmd>silent !tmux neww tmux-sessionizer<CR>')

-- format buffer - ThePrimeagen
vim.keymap.set('n', '<leader>f', function()
  vim.lsp.buf.format()
end)

-- go to errors
vim.keymap.set('n', '<C-k>', '<cmd>cnext<CR>zz')
vim.keymap.set('n', '<C-j>', '<cmd>cprev<CR>zz')
vim.keymap.set('n', '<leader>k', '<cmd>lnext<CR>zz')
vim.keymap.set('n', '<leader>j', '<cmd>lprev<CR>zz')

vim.keymap.set(
  'n',
  '<leader>S',
  ':%s/\\<<C-r><C-w>\\>/<C-r><C-w>/gI<Left><Left><Left>'
)
vim.keymap.set('n', '<leader>x', '<cmd>!chmod +c %<CR>', { silent = true })

-- [[ Basic Keymaps ]]
--  See `:help vim.keymap.set()`

-- Set highlight on search, but clear on pressing <Esc> in normal mode
vim.opt.hlsearch = true
vim.keymap.set('n', '<Esc>', '<cmd>nohlsearch<CR>')

-- Diagnostic keymaps
vim.keymap.set(
  'n',
  '[d',
  vim.diagnostic.goto_prev,
  { desc = 'Go to previous [D]iagnostic message' }
)
vim.keymap.set(
  'n',
  ']d',
  vim.diagnostic.goto_next,
  { desc = 'Go to next [D]iagnostic message' }
)
vim.keymap.set(
  'n',
  '<leader>e',
  vim.diagnostic.open_float,
  { desc = 'Show diagnostic [E]rror messages' }
)
vim.keymap.set(
  'n',
  '<leader>q',
  vim.diagnostic.setloclist,
  { desc = 'Open diagnostic [Q]uickfix list' }
)

-- Exit terminal mode in the builtin terminal with a shortcut that is a bit easier
-- for people to discover. Otherwise, you normally need to press <C-\><C-n>, which
-- is not what someone will guess without a bit more experience.
--
-- NOTE: This won't work in all terminal emulators/tmux/etc. Try your own mapping
-- or just use <C-\><C-n> to exit terminal mode
vim.keymap.set(
  't',
  '<Esc><Esc>',
  '<C-\\><C-n>',
  { desc = 'Exit terminal mode' }
)

-- TIP: Disable arrow keys in normal mode
vim.keymap.set('n', '<left>', '<cmd>echo "Use h to move!!"<CR>')
vim.keymap.set('n', '<right>', '<cmd>echo "Use l to move!!"<CR>')
vim.keymap.set('n', '<up>', '<cmd>echo "Use k to move!!"<CR>')
vim.keymap.set('n', '<down>', '<cmd>echo "Use j to move!!"<CR>')

-- Keybinds to make split navigation easier.
--  Use CTRL+<hjkl> to switch between windows
--
--  See `:help wincmd` for a list of all window commands
vim.keymap.set(
  'n',
  '<C-h>',
  '<C-w><C-h>',
  { desc = 'Move focus to the left window' }
)
vim.keymap.set(
  'n',
  '<C-l>',
  '<C-w><C-l>',
  { desc = 'Move focus to the right window' }
)
vim.keymap.set(
  'n',
  '<C-j>',
  '<C-w><C-j>',
  { desc = 'Move focus to the lower window' }
)
vim.keymap.set(
  'n',
  '<C-k>',
  '<C-w><C-k>',
  { desc = 'Move focus to the upper window' }
)

-- Open command with ;
vim.keymap.set('n', ';', ':', { desc = 'Open command.' })

-- Save file
vim.keymap.set('n', '<C-s>', ':write<CR>', { desc = 'Write buffer.' })

-- Create a vertical terminal.
vim.keymap.set(
  'n',
  '<C-w>th',
  ':split | term<CR>',
  { desc = 'Horizontal create terminal.' }
)

vim.keymap.set(
  'n',
  '<C-w>tv',
  ':vsplit | term<CR>',
  { desc = 'Vertical create terminal.' }
)

vim.keymap.set(
  'n',
  '<C-w>tt',
  '<cmd>write<cr>',
  { desc = 'Make window a terminal.' }
)

-- Go to next buffer.
vim.keymap.set('n', '<C-}>', '10j')
vim.keymap.set('v', '<C-}>', '<Esc>10j')
vim.keymap.set('i', '<C-}>', '<Esc>10j')

-- Go to previous buffer.
vim.keymap.set('n', '<C-{>', '10j')
vim.keymap.set('v', '<C-{>', '<Esc>10j')
vim.keymap.set('i', '<C-{>', '<Esc>10j')