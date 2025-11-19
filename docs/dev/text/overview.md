---
prev: true
next: true
description: Basic overview of text modding.
outline: [2, 3]
---

# Text Modding
Unlike the other modding sections, modifying text in Helldivers does not require Blender or the Helldivers SDK. It instead takes advantage of the Audio modding tool and it's capability for modifying text.

## Required Resources

### [Audio Modding Tool](https://github.com/RaidingForPants/hd2-audio-modder/releases/)
Developed for modding Helldivers 2 audio and text.

## Modding Text

::: warning
Write down any and all Text Changes you make!

The Search looks at the text files' contents, not their file names.

*For Example:* If you change the planet name `Super Earth` to `No Johns`, you'll have to Search `No Johns` to find that text file again.
:::

### Tool Overview
Time to cover the basics.
- <font color="#26ae67">The Green Section</font> is for the folders you add through `File -> Add a Folder to Workshop`.  These will update live as you change the contents of the original folders.
- <font color="#c34949">The Red Section</font> is the section you will find the loaded `Archives` along with the files in those Archives.
Archives are loaded via `File -> Open -> From HD2 Data Folder`
- <font color="#cbad30">The Yellow Section</font> is file editor, normally this is where we change the settings for the selected Segment / Track, in this case it will be used the same as you would notepad.  Left-click on files in The <font color="#c34949">Red Section</font> to pull up their Info in <font color="#cbad30">this section</font>.
- <font color="#4540df">The Blue Section</font> is the search bar. Enter text here and press `ENTER` to search currently loaded archives. Be warned, the search is case sensitive. There can be multiple results, see to the right side of the Search Box for this information.

![Paste URL](/images/audio-general/ToolOverview.png)

---

### Replacing Text
Load the `9ba626afa44a3aa3` archive.

This archive contains the majority of the game's text, but not all of it.

After that, make sure to select the language you want to edit by clicking `Options` -> `Game Text Language` -> `Select Language`. Keep in mind that there are two different English Text Options. Each of these are seperate instances and will need changed individually as you deem necessary.

![Paste URL](/images/text-general/selectlanguage.png)

---

You can tell subtitles from text boxes by the use of timestamps.
> EXAMPLE OF A SUBTITLE
![Paste URL](/images/text-general/subtitle-example.png)

> EXAMPLE OF A TEXT BOX
![Paste URL](/images/text-general/textbox-example.png)

---

Left-click a file from aforementioned "Red Section" or search for something specific with the Search Bar.
![Paste URL](/images/text-general/selectfile.png)

Change the text in the right-most field, then click `Apply`.
![Paste URL](/images/text-general/apply.png)
If you ever need to reset a text file to it's vanilla text you can click the button to the left of `Apply`.

::: warning
Once again; Write down any and all Text Changes you make!

The Search looks at the text files' contents, not their file names.

*For Example:* If you change the planet name `Super Earth` to `No Johns`, you'll have to Search `No Johns` to find that text file again.
:::

After you make all the text adjustments click `File` -> `Write Patch`
![Paste URL](/images/text-general/writepatch.png)
And pick a destination to save the patch files. (Save them somewhere you can find them again later.)

---

### Text Formatting
#### Index
- Italics `<i=1>Example</i>`

#### Color (documented By Racc on [Steam Guides](https://steamcommunity.com/sharedfiles/filedetails/?id=3368366348))
>Exmaple of colored text `<c=YYXXXXXX>Example</c>` <br> 
- YY: Transparency Value (2 hex digits)
- - 00: Fully transparent
- - FF: Fully opaque
- XXXXXX: Color Value (6 hex digits)
- - 000000: Black
- - FFFFFF: White

---

### General Rules
No two text changing mods can be loaded at the same time. In very rare cases the game will read from both, but in most cases it will pick the mod with the highest load priority to read from while discarding the lower priority mod.

- Text Capitalization
- - Information have normal capitalization.
- - Subtitles have normal capitalization.
- - WEAPONS ARE ALL CAPITAL.
- - CAPES ARE ALL CAPITAL.
- - PLAYER CARDS ARE ALL CAPITAL.
- - PLANET NAMES ARE ALL CAPITAL.
- - MAIN OBJECTIVE MISSION NAMES ARE ALL CAPITAL.
