local modes = { 'n', 'i', 'v' }

-- Keep cursor where it was when doing J
vim.keymap.set('n', 'J', 'mzJ`z', { desc = 'Join lines without moving cursor' })

-- Move up or down 50 lines
vim.keymap.set('n', '<C-d>', '<C-d>zz', { desc = 'Scroll down half page and center' })
vim.keymap.set('n', '<C-u>', '<C-u>zz', { desc = 'Scroll up half page and center' })

-- Search word under cursor
vim.keymap.set(
  'n',
  '<leader>S',
  ':%s/\\<<C-r><C-w>\\>/<C-r><C-w>/gIc<Left><Left><Left><Left>',
  { desc = '[S]ubstitute word under cursor' }
)

-- Keep search terms in the middle of the screen
vim.keymap.set('n', 'n', 'nzzzv', { desc = 'Next search result and center' })
vim.keymap.set('n', 'N', 'Nzzzv', { desc = 'Previous search result and center' })

-- Keep p reserved when pasting over something
vim.keymap.set('x', '<leader>p', '"_dP', { desc = '[P]aste without yanking replaced text' })

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
vim.keymap.set('i', '<C-c>', '<Esc>', { desc = 'Exit insert mode' })

-- Yank whole file to clipboard
vim.keymap.set('n', '<C-c>', ':%y+<CR>', { desc = 'Copy entire file to clipboard', silent = true })

-- Disable Q
vim.keymap.set('n', 'Q', '<nop>', { desc = 'Disable Ex mode' })

-- Go to errors
vim.keymap.set('n', '<leader>k', '<cmd>lnext<CR>zz', { desc = 'Next location list item' })
vim.keymap.set('n', '<leader>j', '<cmd>lprev<CR>zz', { desc = 'Previous location list item' })

-- Change file permissions
vim.keymap.set('n', '<leader>x', '<cmd>!chmod +x %<CR>', { desc = 'Make current file executable', silent = true })

-- Clear search highlights on pressing <Esc> in normal mode
vim.keymap.set('n', '<Esc>', '<cmd>nohlsearch<CR>', { desc = 'Clear search highlights' })

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
vim.keymap.set('n', '<left>', '<cmd>echo "Use h to move!!"<CR>', { desc = 'Disabled: use h' })
vim.keymap.set('n', '<right>', '<cmd>echo "Use l to move!!"<CR>', { desc = 'Disabled: use l' })
vim.keymap.set('n', '<up>', '<cmd>echo "Use k to move!!"<CR>', { desc = 'Disabled: use k' })
vim.keymap.set('n', '<down>', '<cmd>echo "Use j to move!!"<CR>', { desc = 'Disabled: use j' })

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
vim.keymap.set('n', '<C-S-A>', 'ggVG', { desc = 'Select entire buffer' })

-- Control split size
vim.keymap.set('n', '<M-,>', '<c-w>5<', { desc = 'Decrease window width' })
vim.keymap.set('n', '<M-.>', '<c-w>5>', { desc = 'Increase window width' })
vim.keymap.set('n', '<M-t>', '<C-W>+', { desc = 'Increase window height' })
vim.keymap.set('n', '<M-s>', '<C-W>-', { desc = 'Decrease window height' })

-- Close buffer without closing the split
vim.keymap.set(
  'n',
  '<leader>bd',
  ':bp|bd #<CR>',
  { desc = 'Close buffer without closing split' }
)
