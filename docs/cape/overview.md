---
prev: true
next: true
description: Get started with developing cape mods for Helldivers 2.
outline: [2, 3]
---

# Getting Started

## Required Programs

#### [Blender 4.0](https://www.blender.org/download/previous-versions/)
The main program you will be using for the creation of mods
You can also download off of Steam. Just make sure you go to the properties of Blender and turn on the 4.0 setting in the Betas tab.

::: warning
Blender Version **4** is absolutely required. 

Any version from 4.0 to 4.3 will suffice but versions beyond WILL NOT WORK.
:::

#### [Helldivers 2 SDK](https://github.com/Boxofbiscuits97/HD2SDK-CommunityEdition/releases/latest)
The main modding tool for Helldivers 2 in the form of a Blender addon.

#### [GIMP](https://www.gimp.org/)
Or your image editor of choice. For the [Beginner guide](#beginners-course) we'll be using GIMP.

For further instruction on getting those set up please see [Getting Started](../overview/#installing-blender-plugins)

## Other Resources

#### [Helldivers 2 Archive Labeling](https://docs.google.com/spreadsheets/d/1oQys_OI5DWou4GeRE3mW56j7BIi4M7KftBIPAl1ULFw/edit?gid=446642267#gid=446642267&range=A1)
Has the archive listing for every known cape in the game. (Updated very frequently)

#### [HD2 Cape Modding Cheatsheet](https://docs.google.com/spreadsheets/d/1IcQe2r0ApBa8Ib_v4yAR1NZvyvsg__5FMVQnw-pkXmQ/edit?gid=1321207950#gid=1321207950&range=C1)
Has the archive listing, file names, and shared asset markings for every known cape in the game. (Updated monthly)

## Beginners Course
This section will assume you've never used Blender or GIMP before. See the [Intermediate Course](./overview/#intermediate-course) if you know what you're doing.

---

#### Open Modding Tab
After you first open blender (with the SDK add-on enabled) left-click the `white arrow` to pull up your toolbox.
![opentab](..\public\images\cape-general\opentab.png)

After that left-click the `Modding` button.
![clickmodding](..\public\images\cape-general\clickmodding.png)

---

#### Load Base Archive
First step in every project is to load the `9ba626afa44a3aa3 archive` also known as the `Base Patch Archive`. To do this left-click the `star icon`.
![load9ba](..\public\images\cape-general\load9ba.png)

---

#### Create New Patch
Next we'll left-click `New Patch`. This will tell Blender what archive to patch our changes to.
![newpatch](..\public\images\cape-general\newpatch.png)

---

#### Load The Cape Archive
There are a few ways to do this, we'll go over both.

---

- Method 1: Search For Known Archive

Left-click on the wide `Search Found Archvies` button to the right of the Base Archive Star we clicked earlier.
![searchfoundarchives](..\public\images\cape-general\searchfoundarchives.png)

After this, you can use the Search bar at the top of the pop-up to find your cape easily. I entered the word `Cape` so it would show every known cape in the list. But you can search your cape's name to get a better result.

After you find it click the `file icon with a plus` to load it into our project.
![selectarchive](..\public\images\cape-general\selectarchive.png)

---

- Method 2: Load It Manually

Check out [Other Resources](./overview/#other-resources) for community compiled lists of the archives.

If you already know the cape's archive you can load it by left-clicking the Folder icon to the right of the currently loaded Archive.
![loadmanual](..\public\images\cape-general\loadmanual.png)

Then paste the archive into the search box, thats located to the right of the URL bar. Then select the file with no extension.
![loadmanual](..\public\images\cape-general\pastearchive.png)

---



---

## Intermediate Course