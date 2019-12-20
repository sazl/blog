---
title: "Novation X-Station SYSEX"
date: 2019-11-30T10:12:47-05:00
tags: [synth, midi, music]
---

Figuring out X-Station's SYSEX format.

# SYSEX

System Exclusive MIDI files are used by manufacturers for proprietary programming of their controllers.

The basic message format:

```
F0 <metadata> <data> F7
```

- Byte F0: Start marker
- Byte F7: End marker
- Metadata: Manufacturer code, data size (variable size)
- Data: Data to be sent (variable size)



# References

https://www.csie.ntu.edu.tw/~r92092/ref/midi/

https://github.com/asb2m10/dexed/blob/master/Documentation/sysex-format.txt

https://electronicmusic.fandom.com/wiki/System_exclusive

https://github.com/francoisgeorgy/BS2-SysEx