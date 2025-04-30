import os
import sublime
import sublime_plugin

# Shows the file history using Sublime Merge.
# Unlike `sublime_merge_file_history`, this uses `min-parents:0` to show merge commits.
class ShowFileHistoryCommand(sublime_plugin.WindowCommand):
    def run(self, paths = []):
        path = paths[0] if (len(paths)) else self.window.active_view().file_name()
        repoDirectory = os.path.dirname(path)

        while (repoDirectory):
            if (os.path.isdir(f'{repoDirectory}/.git')):
                break
            parentDirectory = os.path.dirname(repoDirectory)
            repoDirectory = parentDirectory if (parentDirectory != repoDirectory) else ''

        if (repoDirectory):
            filePath = path[len(repoDirectory) + 1:]
            print('repoDirectory', repoDirectory, filePath)
            self.window.run_command('exec', {
                'shell_cmd': f'/opt/homebrew/bin/smerge search "file:\\"{filePath}\\" min-parents:0"',
                'working_dir': repoDirectory
            })
        else:
            print('Repository not found!')
