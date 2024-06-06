# MacOS

## 1Password

- Log into 1Password.

### Settings

#### Developer

- **Use the SSH agent**: `true`
- **Integrate with 1Password CLI**: `true`
- **Check for developer credentials on disk**: `true`

## Brave

### Flags

- Go to `brave://flags/`.
- **Auto Dark Mode for Web Contents**: `Enabled`.

### Settings

#### Downloads

- **Ask where to save each file before downloading**: `false`
- **Show downloads when they're done**: `false`

## CurseForge

### Minecraft

#### Modpacks

- DME Pixelmod
- SevTech: Ages of the Sky
- SkyFactory 4

## Dock

- Add `/Applications` & `~/Downloads` to the right side of the dock.
- Rick-click dock folders and set **Display as** to `Folder`.

## Finder

### Advanced

- **Show all filename extensions**: `true`
- **Show warning before changing an extension**: `false`

### General

- **New Finder windows show**: `{username}`

### Sidebar

#### Favorites

- **Applications**: `true`
- **Downloads**: `true`
- **{username}**: `true`

#### iCloud

- **iCloud Drive**: `false`
- **Shared**: `false`

#### Locations

- **Hard disks**: `true`
- **External disks**: `true`
- **CDs, DVDs, and iOS Devices**: `true`
- **Cloud Storage**: `true`
- **Bonjour computers**: `true`
- **Connected servers**: `true`
- **Recent Tags**: `true`

#### Sidebar Items

This is not in the Finder settings, just drag and drop the items in the sidebar until it matches this list. Some directories may not exist and will need to be created prior to adding them to the sidebar.

- `Macintosh HD`: `/`
- `Applications`: `/Applications`
- `<username>`: `~/`
- `Downloads`: `~/Downloads`
- `Media`: `~/Media`
- `Sites`: `~/Sites`
- `Tags`: N/A

## iPhone

### Settings

#### Messages

##### Text Message Forwarding

- **{Name of Mac}**: `true`

## pgAdmin 4

- Add New Server
- **Name**: `localhost`
- **Host name/address**: `localhost`
- **Username**: `{username}`
- Add Login
  - Username & password are stored in the private environment file.
  - Member of
    * `pg_read_all_data`
    * `pg_write_all_data`

## Raycast

### Extensions

#### 1Password for Safari

- **Enabled**: `false`

#### Coffee

Lets you keep your mac from sleeping.

#### Insomnia

- **Enabled**: `false`

#### Quicklinks

- `edit-aaron`: `~/Sites/dotfiles/environments/DustinMEastway/common/sublime-text/projects/aaron.sublime-project`
- `edit-brass-raven`: `~/Sites/dotfiles/environments/DustinMEastway/common/sublime-text/projects/brass-raven.sublime-project`
- `edit-dotfiles`: `~/Sites/dotfiles/environments/DustinMEastway/common/sublime-text/projects/dotfiles.sublime-project`
- `edit-game`: `~/Sites/dotfiles/environments/DustinMEastway/common/sublime-text/projects/game.sublime-project`
- `edit-lireddit`: `~/Sites/dotfiles/environments/DustinMEastway/common/sublime-text/projects/lireddit.sublime-project`
- `edit-notes`: `~/Sites/dotfiles/environments/DustinMEastway/common/sublime-text/projects/notes.sublime-project`
- `link-brass-raven-project`: `https://github.com/orgs/brass-raven/projects/{Project:1}/views/1`
- `link-github`: `https://github.com/DustinMEastway?tab=repositories`

#### Snippets

- `@address`: `{address}`
- `@fullName`: `{fullName}`
- `@personal`: `{personalEmail}`
- `@phone`: `{phone}`
- `@professional`: `{professionalEmail}`
- `@work`: `{workEmail}`

#### Window Management

- **Settings**
  * Cycling: `None`

- **Subcommand**
  * Bottom Left Quarter
    * Hotkey: `Control + Option + ;`
  * Bottom Right Quarter
    * Hotkey: `Control + Option + L`
  * Left Half
    * Hotkey: `Control + Option + U`
  * Maximize
    * Hotkey: `Control + Option + I`
  * Right Half
    * Hotkey: `Control + Option + O`
  * Top Left Quarter
    * Hotkey: `Control + Option + J`
  * Top Right Quarter
    * Hotkey: `Control + Option + K`

## Software Installs
- [Download Wacom Cintiq Driver](https://www.wacom.com/download).

## Sublime Text

- Open the Command Palette (`cmd + shift + p`)
- Run "Install Package Control"

## System Settings

### Accessibillity

#### Spoken Content

- **System Voice**: `Evan (Enhanced)`
- **Speaking Rate**: `65%`
- **Speak selection**: `true`
- **Show controller**: `Never`

### Appearance

- **Appearance**: `Dark`
- **Accent color**: `Grey`
- **Highlight color**: `Graphite`
- **Click in the scroll bar to**: `Jump to the spot that's clicked`

### Control Center

#### Control Center Modules

- **Bluetooth**: `Show in Menu Bar`

#### Other Modules

##### Battery

- **Show Percentage**: `true`

#### Menu Bar Only

- **Spotlight**: `Don't Show in Menu Bar`

##### Clock Options...

- **Show date**: `Always`
- **Display the time with seconds**: `true`

### Desktop & Dock

- **Minimize windows into application icon**: `true`
- **Automatically hide and show the Dock**: `true`
- **Show recent applications in Dock**: `false`

#### Hot Corners...

- **Bottom Right**: `-`

#### Windows & Apps

- **Default web browser**: `Brave Browser.app`

### Internet Accounts

Add all accounts.
- Aaron Gmail
- Live
- Personal Gmail
- Professional Gmail

### Keyboard

#### Keyboard

- **Adjust keyboard brightness in low light**: `false`
- **Press 'globe' key to**: `Do Nothing`
- **Keyboard navigation**: `true`

##### Keyboard Shortcuts...

###### Function Keys

- **Use F1, F2, etc. keys as standard function keys**: `true`

###### Modifier Keys...

- **Caps Lock**: `No Action`

###### Spotlight

- **Show Spotlight search**: `false`
  - Note: This is because [Raycast](https://www.raycast.com) replaces Spotlight.
- **Show Finder search window**: `false`

Add these values for external Windows keyboards.
- **Option**: `Command`
- **Command**: `Option`

#### Shortcuts

#### Text Input

- **Correct spelling automatically**: `false`
- **Capitalize words automatically**: `false`
- **Add period with double-space**: `false`
- **Use smart quotes and dashes**: `false`

### Lock Screen

- **Start Screen Saver when inactive**: `For 20 minutes`
- **Turn display off on battery when inactive**: `For 10 minutes`
- **Turn display off on power adapter when inactive**: `For 30 minutes`
- **Require password after screen saver begins or display is turned off**: `After 5 seconds`

### Siri & Spotlight

- **Ask Siri**: `false`

### Trackpad

#### Point & Click

- **Look up & data detectors**: `Force Click with One Finger`
- **Secondary click**: `Click in bottom right corner`
- **Tracking speed**: `100%`

#### More Gestures

- **Swipe between full-screen applications**: `Swipe left or right with four fingers`
- **Mission Control**: `Swipe up with four fingers`
