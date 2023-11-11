import os
import sublime
import sublime_plugin

class SandboxCommand(sublime_plugin.TextCommand):
  def run(self, edit):
    path = os.path.abspath(os.path.join(sublime.cache_path(), "..", "Package Storage"))
    self.view.insert(edit, 0, path)
