-- Test if cmp_luasnip is working
-- Open a Go file and run: :lua require('custom.test-snippet')

print("=== Testing cmp_luasnip source ===")

local cmp = require('cmp')
local luasnip = require('luasnip')

-- Get current filetype
local ft = vim.bo.filetype
print(string.format("\nCurrent filetype: %s", ft))

-- Check snippets available for this filetype
local snippets = luasnip.get_snippets(ft)
print(string.format("Snippets available for %s: %d", ft, snippets and #snippets or 0))

if snippets and #snippets > 0 then
  print("\nFirst 10 snippet triggers:")
  for i = 1, math.min(10, #snippets) do
    print(string.format("  %d. '%s'", i, snippets[i].trigger))
  end
end

-- Test if we can get snippet items from cmp
print("\n=== Testing cmp source for 'func' ===")

-- Create a mock request context
local source = require('cmp_luasnip')
local items = source:complete({
  context = {
    filetype = ft,
    cursor = vim.api.nvim_win_get_cursor(0),
  },
  option = {},
  offset = 1,
}, function(response)
  if response and response.items then
    print(string.format("cmp_luasnip returned %d items", #response.items))
    if #response.items > 0 then
      print("\nFirst 5 items:")
      for i = 1, math.min(5, #response.items) do
        local item = response.items[i]
        print(string.format("  %d. %s (label: %s)", i, item.word or "nil", item.label or "nil"))
      end
    end
  else
    print("ERROR: cmp_luasnip returned no items!")
  end
end)

print("\n=== Try typing 'func' and pressing <C-Space> ===")
