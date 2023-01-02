# MacOS

## System Preferences

### General

* **Appearance**: `Dark`
* **Accent color**: `Grey`
* **Highlight color**: `Graphite`
* **Click in the scroll bar to**: `Jump to the spot that's clicked`
* **Prefer tabs**: `in full screen`

### Desktop & Screen Saver

#### Screen Saver

##### Hot Corners...

* **Bottom Right**: `-`

### Dock & Menu Bar

#### Dock & Menu Bar

* **Automatically hide and show the Dock**: `true`
* **Show recent applications in Dock**: `false`

#### Bluetooth

* **Show in Menu Bar**: `true`

#### Battery

* **Show Percentage**: `true`

#### Clock

* **Display the time with seconds**: `true`

#### Spotlight

* **Show in Menu Bar**: `false`

### Siri

* **Enable Ask Siri**: `false`

### Accessibillity

#### Spoken Content

* **System Voice**: `Alex`
* **Speaking Rate**: `100%`
* **Speak selection**: `true`
  * **Show controller**: `Never`

#### Security & Privacy

* **Require password**: `After 5 seconds`

### Keyboard

#### Keyboard

##### Modifier Keys...

* **Caps Lock**: `No Action`

Add these values for external Windows keyboards.
* **Option**: `Command`
* **Command**: `Option`

#### Shortcuts

##### Spotlight

* **Show Spotlight search**: `false`
  - Note: This is because [Raycast](https://www.raycast.com) replaces Spotlight.
* **Show Finder search window**: `false`
* **Use keyboard navigation to move focus between controls**: `true`

### Trackpad

#### Point & Click

* **Look up & data detectors**: `Tap with three fingers`
* **Secondary click**: `Click in bottom right corner`
* **Tracking speed**: `100%`

#### More Gestures

* **Swipe between full-screen apps**: `Swipe left or right with four fingers`
* **Mission Control**: `Swipe up with four fingers`

## Finder

### General

* **New Finder windows show**: `{username}`

### Sidebar

* **Applications**: `true`
* **Documents**: `true`
* **Downloads**: `true`
* **{username}**: `true`
* **Hard disks**: `true`
* **External disks**: `true`
* **CDs, DVDs, and iOS Devices**: `true`
* **Cloud Storage**: `true`
* **Bonjour computers**: `true`
* **Connected servers**: `true`
* **Recent Tags**: `true`

#### Sidebar Items

This is not in the Finder settings, just drag and drop the items in the sidebar until it matches this list. Some directories may not exist and will need to be created prior to adding them to the sidebar.

* `Macintosh HD`: `/`
* `Applications`: `/Applications`
* `<username>`: `~/`
* `Downloads`: `~/Downloads`
* `Media`: `~/Media`
* `Sites`: `~/Sites`
* `Tags`: N/A

### Advanced

* **Show all filename extensions**: `true`
* **Show warning before changing an extension**: `false`

## Sublime Merge

### General

 * **Theme**: `Auto`
 * **Tab Size**: `2`

### Commits

* **Commit Signature Error Highlighting**: `No Signature, Invalid Signature, or Missing Public Key`

### Commit Messages

### Editor
### Advanced

# TODO
defaults write com.sublimetext.4
