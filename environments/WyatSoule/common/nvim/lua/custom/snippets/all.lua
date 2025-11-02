-- Example snippets for all filetypes
-- See :help luasnip for more info

local ls = require 'luasnip'
local s = ls.snippet
local t = ls.text_node
local i = ls.insert_node

return {
  -- Example: type 'todo' and expand to a TODO comment
  s('todo', {
    t 'TODO: ',
    i(1, 'description'),
  }),

  -- Example: type 'fixme' and expand to a FIXME comment
  s('fixme', {
    t 'FIXME: ',
    i(1, 'description'),
  }),
}
