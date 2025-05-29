---
prev: false
next: true
description: Get started with developing mods for Helldivers 2.
---

# Getting Started

To begin making mods for Helldivers 2, you are going to need to install a few programs. Some are required and some are recommended for modders.



## Required Programs

### [Blender 4.0](https://www.blender.org/download/previous-versions/)
The main program you will be using for the creation of mods
You can also download off of Steam. Just make sure you go to the properties of Blender and turn on the 4.0 setting in the Betas tab.

::: warning
Blender Version **4** is absolutely required. 

Any version from 4.0 to 4.3 will suffice but versions beyond WILL NOT WORK.
:::

### [Helldivers 2 SDK](https://github.com/Boxofbiscuits97/HD2SDK-CommunityEdition/releases/latest)
The main modding tool for Helldivers 2 in the form of a Blender addon.



## Optional Programs


### Top Recommendations

#### [GIMP](https://www.gimp.org) 
GIMP is highly recommended as the Photo Manipulation Program. Photoshop or any other alternatives work just as well but some guides are GIMP specific as it is an extremely versatile application that has some particularly useful features when it comes to Helldivers Modding.

#### [Robust Weight Transfer Plugin](https://jinxxy.com/SentFromSpaceVR/robust-weight-transfer)
A plugin that more accurately calculates weight transfers than using the one native to Blender. This is extremely useful for making mods that affect the player model. It is highly recommended and free.

#### [Simple Bake Plugin](https://superhivemarket.com/products/simplebake---simple-pbr-and-other-baking-in-blender-2)
Used for baking textures. While it is a paid option, it is definitely an extremely useful and one of the best blender baking addons on the market. A high recommendation.


### Legacy Recommendations

#### [Principled Baker Plugin](https://github.com/danielenger/Principled-Baker)
The free baking alternative if you do not want to use Simple Bake. It has some issues at times with Helldivers 2 modding but works well enough for some use cases.

#### [Material Combiner Plugin](https://github.com/Grim-es/material-combiner-addon)
Not recommended as there are better ways to combine materials more efficiently and optimized but by far the easiest solution. Used to combine material slots and UVMaps onto a single texture/map. This is crucial for importing into HD2.

#### [Materialize](https://boundingboxsoftware.com/materialize/downloads.php)
Not recommended as there are better ways to generate textures better but by far the easiest solution. Creates lighting textures as long as you have a color map and normal map. Additionally channel packs PBR textures.



# Installing Blender Plugins

You now need to install the Blender Addons you have downloaded to Blender.

1. In Blender go to `Edit > Preferences` in the file bar at the top of the window.
2. Go to the `Add-ons` section and click on the `Install` button.
3. Find where you downloaded your Addon. Make sure the files are still in `.zip` format.
4. Once installed, you need to enable it by checking the checkbox next to it's name.
5. Repeat for any other Blender Addons you have downloaded. 