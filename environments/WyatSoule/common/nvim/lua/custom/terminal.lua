local set = vim.opt_local

-- Set local settings for terminal buffers
vim.api.nvim_create_autocmd('TermOpen', {
  group = vim.api.nvim_create_augroup('custom-term-open', {}),
  callback = function()
    set.number = false
    set.relativenumber = false
    set.scrolloff = 0
  end,
})

-- Easily hit escape in terminal mode.
-- vim.keymap.set('t', '<esc><esc>', '<c-\\><c-n>')

-- Open a terminal at the bottom of the screen with a fixed height.
-- vim.keymap.set('n', ',st', function()
--   vim.cmd.new()
--   vim.cmd.wincmd 'J'
--   vim.api.nvim_win_set_height(0, 12)
--   vim.wo.winfixheight = true
--   vim.cmd.term()
-- end)
-- Create a vertical terminal.
vim.keymap.set(
  'n',
  '<C-w>th',
  ':split | term<CR>',
  { desc = '[T]erminal [h]orizontal.' }
)

-- Create a horizontal terminal.
vim.keymap.set(
  'n',
  '<C-w>tv',
  ':vsplit | term<CR>',
  { desc = '[T]erminal [v]ertical' }
)

_G.split_twice = function()
  -- Split the window vertically.
  vim.cmd '10split'
  -- Make the window a terminal.
  vim.cmd 'terminal'
  -- Move to the new split window.
  vim.cmd 'wincmd l'
  -- Disable line numbers in the new horizontal split.
  vim.cmd 'setlocal nonumber norelativenumber'
  -- Split the new window horizontally.
  vim.cmd 'vsplit'
  -- Make the second window a terminal.
  vim.cmd 'terminal'
  -- Disable line numbers in the new vertical split.
  vim.cmd 'setlocal nonumber norelativenumber'
end

-- Split the window to have to terminals side by side on the bottom quarter.
vim.api.nvim_set_keymap(
  'n',
  '<C-w>ts',
  ':lua split_twice()<CR>',
  { noremap = true, silent = true }
)

vim.keymap.set('n', '<C-w>tt', '<cmd>terminal<cr>', { desc = 'New [t]erminal' })
