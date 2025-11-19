---
prev: 
    text: 'Music'
    link: '/music'
next: 
    text: 'SFX'
    link: '/audio/sfx'
description: Get started with developing audio mods for Helldivers 2.
---

# Audio Modding
Welcome to the beginning of your Audio Modding Adventure! Unlike the other modding sections, modifying audio in Helldivers does not require Blender or the Helldivers SDK.


## Required Resources

### [Audio Modding Tool](https://github.com/RaidingForPants/hd2-audio-modder/releases/)
Developed for modding Helldivers 2 audio and text.

### [WWise](https://www.audiokinetic.com/en/download/)
Used by the Audio Modding Tool to convert audio files (.wav .mp3 .ogg etc) to .wem files.
Helldivers 2 can only read .wem files.

::: warning
Wwise Version **2023.1.7.8574** is recommended. 

Any other version may work, but are not fully supported.
:::




## Optional Resources

### [Audacity](https://www.audacityteam.org/download/windows/)
Used for editing audio files.




## Information Hubs

### [Community Music Archive](https://docs.google.com/spreadsheets/d/1drg0VRwn1c247GwBOEgFBIJmBQxy2Ik-ZLuSjbWbK4o/edit?usp=sharing)
In depth documentation on what .wem files play in what situations.

### [Community Archive Labelling](https://docs.google.com/spreadsheets/d/1oQys_OI5DWou4GeRE3mW56j7BIi4M7KftBIPAl1ULFw/edit?usp=sharing)
Contains useful documentation for SFX and Voiceline modding.




## Terminology
### <font color="#008080">Archive</font>
This is a file that acts like a folder for the game to organize it's files in.


### <font color="#008080">Patch</font>
This is the file we generate when making a mod for the game. This file goes into the `Helldivers 2/data` folder alongside the vanilla files.


### <font color="#008080">Cue</font>
This is a trigger for a segment to begin playing.

### <font color="#008080">Segment</font>
A segment is the house the Track and WEM live in. This contains settings that will tell the game "How much time to reserve so it's tracks don't get cut off."


### <font color="#008080">Track</font>
A Track is what controls which WEMs play at what time. They also control the volume of the WEMs.


### <font color="#008080">WEM (.wem)</font>
WEMs live inside the Tracks. They are the sound files the game uses to play audio. Much like an .mp3 or .wav file.


### <font color="#008080">Silencing Wems</font>
This is done by setting all four fields to 0 in the wem’s Track settings.


### <font color="#008080">Silencing Segments</font>
This is done by setting all three fields to 0 in the segment’s settings.




## Modding Audio
### Set-up

#### Download the Audio Kinetic Launcher
This is the launcher we will use to download Wwise
<font color="#FFF000">**// THIS NEEDS WRITTEN OUT WITH IMAGES**</font>

---

#### Download the newest release of the [Audio Modding Tool](https://github.com/RaidingForPants/hd2-audio-modder/releases/)
Unzip the files into their own folder with [Winrar](https://www.win-rar.com/download.html?&L=0), [7zip](https://www.7-zip.org/download.html), etc.
Your folder should look like this:

![Audio Tool Fresh](/images/audio-general/AudioToolFresh.png)

#### Run `audio_modder.exe`
You may get a `Windows protected your PC` pop up, this is normal. The reason the program is flags as suspicious, is because it needs to search your Programs for your Wwise installation.
Click `More info` then `Run anyway`.
You will only get this prompt on the first launch.

#### Finding your `Helldivers 2/data` folder
On the first launch of the Audio Modding Tool it will ask for your Data folder. This can be found by:
- Open your `Steam Library` and right-click `Helldivers 2` then left-click `Properties...`

![Properties](/images/audio-general/Properties.png)


- Left-click `Installed Files` then on the top right left-clik `Browse...`

![Browse](/images/audio-general/Browse.png)


- Open the folder named `data`

![Data Folder](/images/audio-general/data.png)


- Left-click on the empty right-side of the URL to select the path.  Then press `Ctrl+C` to copy the path

![Copy URL](/images/audio-general/URL.png)



- Paste the path in the Audio Modding Tool's pop-up explorer

![Paste URL](/images/audio-general/pasteurl.png)

Then left-click `Select Folder` on the bottom right of that window.

## Audio Modding Tool
Now that we have everything set up it's time to get familiar with how the tool works.

The first step in every Audio Modding Project is to click `View -> Hierarchy`
![Paste URL](/images/audio-general/Heirarchy.png)
This switches the program from the "wem only" `Sources View` to a view that shows `Segments`, `Tracks`, `Wems`, and more.

### Tool Overview
Time to cover the basics.
- <font color="#26ae67">The Green Section</font> is for the folders you add through `File -> Add a Folder to Workshop`.  These will update live as you change the contents of the original folders.
- <font color="#c34949">The Red Section</font> is the section you will find the loaded `Archives` along with the `Segments`, `Tracks`, `Wems`, `Events`, etc.
Archives are loaded via `File -> Open -> From HD2 Data Folder`
- <font color="#cbad30">The Yellow Section</font> is where we change the settings for the selected Segment / Track.  Left-click on files in The <font color="#c34949">Red Section</font> to pull up their Info in <font color="#cbad30">this section</font>.
- <font color="#4540df">The Blue Section</font> is the search bar. Paste a wem filename and press `ENTER` to search. This will sort through currently loaded Archives in the <font color="#c34949">Red Section</font>.  There can be multiple results, see to the right side of the Search Box for this information.

![Paste URL](/images/audio-general/ToolOverview.png)

---

### 1. Importing Files
There are several methods to importing audio files to our patch.

---

#### 2. Workshop Method
First, Import a folder to the Audio Modding Tool. by left-clicking `File -> Add a folder to Workshop`

---

#### 3. Manual Import

---

#### 4. Targeted Import
<font color="#FFF000">// THIS NEEDS WRITTEN OUT WITH IMAGES</font>

---

[JOIN THE HELLDIVERS 2 MODDING DISCORD](https://discord.gg/helldiversmodding)
