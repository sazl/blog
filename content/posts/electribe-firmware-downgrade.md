---
title: "Electribe Firmware Downgrade"
date: 2019-11-28T11:14:47-05:00
draft: false
tags: [synth, music]
---

## Pre-conditions

1. Ensure your electribe synth is on version 2.02

## Preparation

2. Download firmware v1.06 for the sampler electribe
3. Download firmware v.1.10 for the synth electribe

> These 2 firmwares lack protection checking when swapping between electribes.
> v1.17+ of the synth version and v1.14+ of the sampler will have protection checking,
> preventing you from swapping firmwares

## Downgrading the Synth Version

4. Edit the v1.10 header of the synth firmware to look like v2.02

> Look for differences in the header ranging from 0x00 to 0x30
> The version information is stored in bytes: major (0x2A) minor (0x2B)

5. Load the firmware onto an SD card and update your electribe
6. Your electribe will now be v1.10 (v2.02 displayed)

## Swapping to the Sampler Version

7. Edit the sampler firmware v1.06 to look like a synth firmware v1.11
8. Load it on an SD card and update your electribe
9. Your electribe will now be a sampler v1.06

## Upgrading Sampler Version

10. Load an unedited sampler firmware on an SD card and update as usual
11. I've been unable to successfully update from v1.06 to any other version, I assume newer version have protections.

## Going Back to the Synth Version

12. Edit synth firmware v1.10 to look like a sampler firmware v1.06
13. Load it on an SD card and update your electribe
14. The electribe will be a synth v1.10
15. Upgrade the electribe normally using unedited synth firmware versions