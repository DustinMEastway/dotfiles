import functools
import os
import sublime
import sublime_plugin

# Adds a command to rename a file.
class RenamePathCommand(sublime_plugin.WindowCommand):
    def run(self, paths = []):
        directory, oldFilename = os.path.split(
            paths[0] if len(paths) else self.window.active_view().file_name()
        )
        view = self.window.show_input_panel(
            "New Name:",
            oldFilename,
            functools.partial(self.on_done, oldFilename, directory),
            None,
            None
        )
        name, ext = os.path.splitext(oldFilename)

        view.sel().clear()
        view.sel().add(sublime.Region(0, len(name)))

    def on_done(self, oldFilename, directory, newFilename):
        oldPath = os.path.join(directory, oldFilename)
        newPath = os.path.join(directory, newFilename)

        try:
            os.rename(oldPath, newPath)

            view = self.window.find_open_file(oldPath)
            if view:
                view.retarget(newPath)
        except:
            sublime.status_message("Unable to rename")
