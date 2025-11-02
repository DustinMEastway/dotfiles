-- Debug script to check if snippets are loading
-- Run this with :source ~/.config/nvim/lua/custom/debug-snippets.lua
-- Or :lua require('custom.debug-snippets')

print("=== LuaSnip Debug Info ===")

-- Check if luasnip is loaded
local luasnip_ok, luasnip = pcall(require, 'luasnip')
if not luasnip_ok then
  print("ERROR: LuaSnip not loaded!")
  return
end
print("✓ LuaSnip is loaded")

-- Check if cmp is loaded
local cmp_ok, cmp = pcall(require, 'cmp')
if not cmp_ok then
  print("ERROR: nvim-cmp not loaded!")
  return
end
print("✓ nvim-cmp is loaded")

-- Check cmp sources
print("\n=== CMP Sources ===")
local sources = cmp.get_config().sources
if sources then
  for i, source in ipairs(sources) do
    print(string.format("%d. %s", i, source.name))
  end
else
  print("ERROR: No sources configured!")
end

-- Check available snippets
print("\n=== Available Snippets ===")
local fts = { 'all', 'go', 'lua', 'javascript', 'python' }
for _, ft in ipairs(fts) do
  local snippets = luasnip.get_snippets(ft)
  if snippets and #snippets > 0 then
    print(string.format("%s: %d snippets", ft, #snippets))
    -- Show first few snippet triggers
    local count = 0
    for _, snip in ipairs(snippets) do
      if count < 3 then
        print(string.format("  - %s", snip.trigger))
        count = count + 1
      end
    end
  else
    print(string.format("%s: NO SNIPPETS FOUND", ft))
  end
end

-- Check luasnip loaders
print("\n=== Checking Loaders ===")
local vscode_loader_ok = pcall(require, 'luasnip.loaders.from_vscode')
print(string.format("VSCode loader: %s", vscode_loader_ok and "✓" or "✗"))

local lua_loader_ok = pcall(require, 'luasnip.loaders.from_lua')
print(string.format("Lua loader: %s", lua_loader_ok and "✓" or "✗"))

-- Check paths
print("\n=== Paths ===")
print(string.format("Config path: %s", vim.fn.stdpath('config')))
print(string.format("Data path: %s", vim.fn.stdpath('data')))
local custom_snippet_path = vim.fn.stdpath('config') .. '/lua/custom/snippets'
print(string.format("Custom snippet path: %s", custom_snippet_path))
print(string.format("Custom snippet path exists: %s", vim.fn.isdirectory(custom_snippet_path) == 1 and "YES" or "NO"))

print("\n=== Sample Go Snippets ===")
local go_snippets = luasnip.get_snippets('go')
if go_snippets then
  print(string.format("Showing first 10 Go snippet triggers:"))
  for i = 1, math.min(10, #go_snippets) do
    local snip = go_snippets[i]
    print(string.format("  %d. '%s' - %s", i, snip.trigger, snip.name or "no description"))
  end
end

print("\n=== Testing in Insert Mode ===")
print("1. Open a .go file")
print("2. Type 'func' in insert mode")
print("3. You should see [Snip] next to the snippet in the completion menu")
print("4. Press <C-n> to navigate or <C-y> to select")
print("5. Or just press <Tab> if the snippet is highlighted")

print("\n=== Done ===")
