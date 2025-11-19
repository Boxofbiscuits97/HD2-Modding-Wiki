---
prev: true
next: true
description: The mod manager documentation
---

# Mod Managers

The main method of interacting with mods in Helldivers 2 will be your Mod Manager. There are currently two widely used mod managers. [Arsenal](./arsenal) and [HD2MM](./hd2mm).

::: danger IMPORTANT
It's good to be aware the mod managers do not actually modify the game files or inject anything at run time into Helldivers 2. They are simply file managers that make configuring and placing mods in the game's directory easier for users.
:::

## Common Terms

### Patch Files
The actual mod files that will be put into your game. Commonly coming in a set of 3 files per patch.

### Deloy
The action within the mod manager to place the patch files in your game folder's `/data/` directory.

### Purge
The action within the mod manager to remove the patch files in your game folder's `/data/` directory.

### Load Order
The order in which mods are listed inside the mod manager. This is indiciative of which mods load or override mods. Generally mods later (or lower down) in the load order will take priority and override files if any mods change the same thing.

### Manifest
The configuration for a mod. This allows mods to have multiple sets of patch files where a user can choose between options or customizations for said mod.
