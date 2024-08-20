return {
  "ray-x/lsp_signature.nvim",
  event = "VeryLazy",
  opts = {
    -- doc_lines = 0,
    floating_window = false
  },
  config = function(_, opts) require'lsp_signature'.setup(opts) end
}
