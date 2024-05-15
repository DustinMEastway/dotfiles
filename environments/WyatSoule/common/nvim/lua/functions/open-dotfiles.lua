local function open_dotfiles()
  local telescope = require 'telescope.builtin'
  telescope.find_files {
    prompt_title = '< Dotfiles >',
    cwd = '$HOME/Sites/dotfiles/environments/WyatSoule/',
  }
end
