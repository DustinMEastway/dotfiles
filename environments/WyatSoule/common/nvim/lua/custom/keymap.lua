local modes = { 'n', 'i', 'v' }

-- Open file view (bigger neotree)
vim.keymap.set('n', '<leader>pv', vim.cmd.Ex)

-- Keep cursor where it was when doing J
vim.keymap.set('n', 'J', 'mzJ`z')

-- Move up or down 50 lines
vim.keymap.set('n', '<C-d>', '<C-d>zz')
vim.keymap.set('n', '<C-u>', '<C-u>zz')

-- Search word under cursor
vim.keymap.set(
  'n',
  '<leader>S',
  ':%s/\\<<C-r><C-w>\\>/<C-r><C-w>/gIc<Left><Left><Left><Left>'
)

-- Keep search terms in the middle of the screen
vim.keymap.set('n', 'n', 'nzzzv')
vim.keymap.set('n', 'N', 'Nzzzv')

-- Keep p reserved when pasting over something
vim.keymap.set('x', '<leader>p', '"_dP')

-- Yank to clipboard
vim.keymap.set('n', '<leader>y', '"+y', { desc = 'Copy into clipboard.' })
vim.keymap.set(
  'v',
  '<leader>y',
  '"+y',
  { desc = '[Y]ank highlighted text into clipboard.' }
)
vim.keymap.set(
  'n',
  '<leader>Y',
  '"+Y',
  { desc = '[Y]ank line into clipboard.' }
)

-- Delete to black hole register
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

-- Exit insert mode with Ctrl-C
vim.keymap.set('i', '<C-c>', '<Esc>')

-- Yank whole file to clipboard
vim.keymap.set('n', '<C-c>', ':%y+<CR>', { silent = true })

-- Disable Q
vim.keymap.set('n', 'Q', '<nop>')

-- Go to errors
vim.keymap.set('n', '<leader>k', '<cmd>lnext<CR>zz')
vim.keymap.set('n', '<leader>j', '<cmd>lprev<CR>zz')

-- Change file permissions
vim.keymap.set('n', '<leader>x', '<cmd>!chmod +x %<CR>', { silent = true })

-- Set highlight on search, clear on <Esc>
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

-- -- Exit terminal mode
vim.keymap.set(
  't',
  '<Esc><Esc>',
  '<C-\\><C-n>',
  { desc = 'Exit terminal mode' }
)

-- Disable arrow keys in normal mode
vim.keymap.set('n', '<left>', '<cmd>echo "Use h to move!!"<CR>')
vim.keymap.set('n', '<right>', '<cmd>echo "Use l to move!!"<CR>')
vim.keymap.set('n', '<up>', '<cmd>echo "Use k to move!!"<CR>')
vim.keymap.set('n', '<down>', '<cmd>echo "Use j to move!!"<CR>')

-- Split navigation
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

-- Save file in all modes
for _, mode in ipairs(modes) do
  vim.keymap.set(
    mode,
    '<C-s>',
    '<cmd>write<CR>',
    { desc = 'Write to buffer.', silent = true }
  )
end

-- Yank entire buffer
vim.keymap.set('n', '<C-S-A>', 'ggVG')

-- Control split size
vim.keymap.set('n', '<M-,>', '<c-w>5<')
vim.keymap.set('n', '<M-.>', '<c-w>5>')
vim.keymap.set('n', '<M-t>', '<C-W>+')
vim.keymap.set('n', '<M-s>', '<C-W>-')

-- Close buffer without closing the split
vim.keymap.set(
  'n',
  '<leader>bd',
  ':bp|bd #<CR>',
  { desc = 'Close buffer without closing split' }
)
