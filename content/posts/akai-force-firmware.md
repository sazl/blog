---
title: "Akai Force Firmware"
date: 2020-06-09T20:36:30-04:00
draft: true
---

## Mini Review

After a lot of research, I bought an Akai Force.
I'm enjoying the unit overall. It's as close to a DAW in a box as I've seen.
I see a lot of potential if it's supported well.
In its current state, there are a lot of shortcomings:

- Lack of an arranger mode
  - For now, this is a strictly clip-based workflow
- Crippled MIDI routing:
  - No MIDI out to USB
  - MIDI in via USB always uses the current track
  - MIDI thru isn't configurable

There are also some workflow quirks:

- The '+', '-', and 'Assign' buttons should allow shortcut assignments
  - These buttons are used so little that a secondary function would give them some use
- No 'Enter' button
  - Selections must be made using the rotary encoder or the touch screen
- No tab selectors:
  - The Force's UI uses tabs to separate different controls
  - There is no way to select a tab using hardware buttons
  - This forces the user to reach over to the touch screen to switch tabs

## Force Firmware

Akai provides firmware as an installer or a `.img` that can be loaded on a USB.
The Akai Force runs a standard OpenBSD system.
From my investigation, the UI and backend are implemented in C++ and Juce.
Systemd is used for service scheduling.


### Unpacking the .img

The `.img` file is an `xz` archive:

```
$ binwalk -i Force-3.0.4.44-Update.img

```

Extract the `.img`:

Extract the inner archive:

Root directory:

```
```

### Paths

The main content folder lives at:

```
/usr/share/Akai
```

### Changing Arp Patterns

Arp patterns are stored at:

```
/usr/share/Akai/SME0/Arp Patterns
```

Patterns are stored as MIDI files.
Add a new MIDI file to the folder and it should show up on the Force.

### Changing Progressions

