---
prev: 
    text: 'Overview'
    link: '/audio/overview'
next: 
    text: 'SFX'
    link: '/audio/sfx'
description: Specified guides on modding Music.
outline: [2, 3]
---

# Introduction
Welcome to Ministry of Music.  If you haven't already, follow the set-up guide on the [Overview Page](/audio/overview).  These guides will assume you already have the [Audio Modding Tool](/audio/overview.html#audio-modding-tool), [Wwise](/audio/overview.html#wwise), a general understanding of how the Audio Modding Tool works, and your audio files already made.

This page will cover all current information the community has pertaining to modding the music of Helldivers 2.
This page, like the rest of this site, will adapt and change over time as new information is discovered.


### General Information
The following archives contain all known music in the game.
- Master : `2e24ba9dd702da5c`
- Terminids : `89de9c3d26d2adc1`
- Automatons : `fdf011daecf24312`
- Illuminate : `046d4441a6dae0a9`
- Flag Raise (Terminid & Automaton) : `04f60fc9a8eec97d`
- Flag Raise (Illuminate) : `ac1950d1411393f2`

## Specific Guides
Below you can find numerous information hubs on how to do a complete specific music mods. 

---

### Intro Cinematic
This music is cued during the opening cinematic when you first loadinto your super detroyer and walk onto the bridge.

#### Load the following Archives :
- Master : `2e24ba9dd702da5c`
- Terminids : `89de9c3d26d2adc1`
- Automatons : `fdf011daecf24312`
- Illuminate : `046d4441a6dae0a9`

#### Replace the following wems :

`16077577294769284066`
> Over The Shoulder Intro
> Vanilla wem is 12.209 seconds long

`9731507368509852072`
> Drop Pod Point of View Intro
> Vanilla wem is 14.883 seconds long

`8951951236751821342 `
> Galactic Map Point of View Intro
> Vanilla wem is 13.953 seconds long

---

### Hellpod Descent
Hellpod Descent plays after the player confirms their loadout. The vanilla duration is 46.274 seconds long.

#### Load the following Archives :
- Master : `2e24ba9dd702da5c`
- Terminids : `89de9c3d26d2adc1`
- Automatons : `fdf011daecf24312`
- Illuminate : `046d4441a6dae0a9`

#### Replace the following wems :

`1622724751373655930`

#### Misc. Notes
You may also want to change wem `10594696154686411744` that plays when you first enter the hellpod. The vanilla wem is 15.294 seconds long.

---

### Flag Raise
Flag Raise is 1 minute, 40 seconds long.
However if divers salute the flag, it is only 1 minute, 21 seconds long.

#### Load the following Archives :
- Flag Raise (Terminid & Automaton) : `04f60fc9a8eec97d`
- Flag Raise (Illuminate) : `ac1950d1411393f2`

#### Replace the following wems :

`190505498`
> This must be changed in both archives, and cannot have mismatching data.

---

### Extraction

#### Load the following Archives :
- Master : `2e24ba9dd702da5c`
- Terminids : `89de9c3d26d2adc1`
- Automatons : `fdf011daecf24312`
- Illuminate : `046d4441a6dae0a9`

If you have one song that you want to replace the Extraction music with you only need to replace two wems
- Extraction Called - `4599805593983129059` - This will cue when you initially call down extraction.
- ETA 10 Seconds - `1760094332964909593` - This will play on Eradicate Missions (15 minute defense missions.)

#### Other wems you might find useful:

- Eyes on Extraction - `5505707363637622433`

See the [Community Music Archive](https://docs.google.com/spreadsheets/d/1drg0VRwn1c247GwBOEgFBIJmBQxy2Ik-ZLuSjbWbK4o/edit?gid=822955752#gid=822955752&range=A1) for a full list of wems used during Extraction.

---

### XP Screen
Also known as the "End of mission stat screen"

#### Load the following Archives :
- Master : `2e24ba9dd702da5c`
- Terminids : `89de9c3d26d2adc1`
- Automatons : `fdf011daecf24312`
- Illuminate : `046d4441a6dae0a9`

If you have one song that you want to replace the XP music with you only need to replace the wem `3522923478801935410` (XP Cue 1).

This wem will not be interrupted until wem `6498739329770568990` (Platform Raise)

If you aren't modding Pelican Takeoff, make sure to silence wem `823025205057673992`'s track and it’s segment(s)
This will make `3522923478801935410` (XP Cue 1) play immediately after boarding the pelican.

---

### Ship Ambience

#### Load the following Archives :
- Master : `2e24ba9dd702da5c`
- Terminids : `89de9c3d26d2adc1`
- Automatons : `fdf011daecf24312`
- Illuminate : `046d4441a6dae0a9`

This section consists of three parts, and which you replace / silence is up to you, the user.

- `1524611437487953956` - This plays consistently while aboard the destroyer.
- `17763359945178393624` - This plays while focused on the Galactic Map.
- `7820702089764710742` - This plays while NOT focused on the Galactic Map.

#### Misc Notes
There have been reports of timing issues with these wems. We advise making your music fit the exact timing of the original wems. If you don't adhere to the timing your music may abruptly restart.
- All three wems have the duration of `216571.41666666666`
Easiest way to make sure your music fits the timing is to go into the Audio Modding Tool. 
> Right-click on any of the three wems
> dump as .wav
> import that file into Audacity and slide the gain down so it's silent.


[JOIN THE HELLDIVERS 2 MODDING DISCORD](https://discord.gg/helldiversmodding)