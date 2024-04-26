local ls = require 'luasnip'
local s = ls.snippet
local t = ls.text_node

ls.add_snippets('go', {
  s('enil', {
    t { 'if err != nil {', '\treturn err', '}' },
  }),
})
