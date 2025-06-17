---
prev: 
    text: 'Overview'
    link: '/audio/overview'
next: 
    text: 'Voicelines'
    link: '/audio/music'
description: To aid in fixing music/audio mods.
---

# Troubleshooting
This will serve as a hub for correcting common issues when modding music.

## My patch won't import
Make sure you're importing the `.patch` file and not the `.patch_0.stream` file.

## My patch didn't create a .stream file
This isn't an issue. If you only replace SFX files, a .stream file will not generate.

You can tell the difference between a SFX and music file most often by the length of the WEM file name.
- `1622724751373655930`   connotates a ’music file’.
- `63083831`   connotates a ’sfx file’.

## Automaton or Illuminate Music plays for a few seconds then loops the same track, or will skip to the next song.
1. There is a chance you changed wem `15710139465031006748`. This controls a lot of the cues timing against the Automatons and Illuminate. Never alter this wem under any circumstance.

2. Silence WEM `12078983118692677563` and it's segment(s)

## 10ms of music plays, then glitches into silence against the Illuminate.
This is a result of shared music between the archives being inconsistent. The same data must be set exactly the same (with the same audio files, wem timing, and segment timing) to fix the tracks playing a short burst then going silent.

## The game crashes during Extraction.
That means there is a mismatch in data between the 3 faction archives and the master `2e24ba9dd702da5c` archive. Make sure the music changed is the same across all four archives, and the timing is exactly the same.  Even a 0.0001 ms difference will cause the game to panic when the song is cued.

If specifically the XP Screen has mismatching data. If this is the case the game may freeze or mute the music altogether, but never crashes.

---

If you still have questions :

[JOIN THE HELLDIVERS 2 MODDING DISCORD](https://discord.gg/helldiversmodding)