-- Load all snippet files
local ls = require 'luasnip'

-- Load snippets for all filetypes
local all_snippets = require 'custom.snippets.all'
ls.add_snippets('all', all_snippets)

-- You can add more filetype-specific snippets here
-- Example:
-- local lua_snippets = require 'custom.snippets.lua'
-- ls.add_snippets('lua', lua_snippets)
