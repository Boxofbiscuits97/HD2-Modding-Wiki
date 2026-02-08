---
prev: true
next: true
description: Avatar method for swapping 
---

# Avatar method

An updated method for swapping custom and base game models from one armor to another, unlike ID swapping, avatar swapping can be repatched.

## Import Avatar rig

The Avatar rig is in the Interior 2 archive, it’s ID is `5556372446766824087`

![Import Avatar Rig](/images/avatar-method/avatar-rig_import.png)

## Import Armors to transfer

The two armors you want to swap, Armor A and Armor B, for this tutorial, A will be AF-91 Field Chemist, and B will be PH-56 Jaguar, we will be putting A onto B.

![Import AF-91](/images/avatar-method/AF-91_import.png)

![Import PH-56](/images/avatar-method/PH-56_import.png)

## Set up the avatar rig

Delete the lights and mesh attached to the Avatar rig, these are unnecessary to swapping, we just need the rig itself.

![Set up Avatar rig](/images/avatar-method/Set-up_Avatar.png)

## Changing the Armature modifier

With the rig clear, we are going to take the Armor B meshes, and go to the modifier tab, where there will be an armature modifier.

![to the Modifier tab](/images/avatar-method/Get-to_Modifiers.png)

We are going to change the Object, to whichever rig it is currently using, to our Avatar rig, the rig itself uses the same ID, so look for `5556372446766824087`

![change in Modifier tab](/images/avatar-method/Edit-the_Modifiers.png)

## Copying Properties

Now that we have the avatar rig set onto Armor B, it has all the bones it would need for any armor in the game. 

All we need to do is give the properties and origin point of Armor B, to Armor A. To do this, we are going to join(ctrl+J) them, and then delete the Armor B meshes and materials

![Unjoined to joined meshes](/images/avatar-method/join_the-meshes.png)


In the materials tab, we can choose the materials for Armor B, and hit select, highlighting only Armor B

![Remove meshes](/images/avatar-method/remove-meshes.png)


With Armor B highlighted, we can delete it, leaving only Armor A mesh, but with the Avatar rig, Armor B properties, and origin point

![Before Z_ObjectID](/images/avatar-method/Before-ZObjectID.png)

![After Z_ObjectID](/images/avatar-method/After-ZObjectID.png)

## Wighted Normal Modifier (Extra step)

This really applies to HD2 assets imported via the SDK, but still good to know.

Most (if not all) units imported from the SDK come out looking made of clay/mushed, Armor A is no exception to this 

![Before Weighted Normal](/images/avatar-method/Before-WN.png)

To fix this, we are going to use a modifier called weighted normals

![Adding Weighted Normal](/images/avatar-method/Add-WN.png)

![Finding Weighted Normal](/images/avatar-method/Find-WN.png)

![Weighted Normal settings](/images/avatar-method/setting-WN.png)

![Apply Weighted Normal](/images/avatar-method/Apply-WN.png)

![Before_After Weighted Normal](/images/avatar-method/Before_After-WN.png)


## Patching into the game 

With Armor A highlighted, save in Armor B’s ID 

![Patching Unit](/images/avatar-method/Patch_Unit.png)

Now, if you are using custom materials, those should already be saved in the SDK, and all you need to do is write patch, and check in the game.

If you are using HD2 units, like in this example, you need to save the materials of Armor A so it will show up on Armor B, if you do not, it will not show up at all. 

![Patching Mats](/images/avatar-method/Patch_Mats.png)

With one unit done, you repeat the process for the rest of the units.

![One Unit Done](/images/avatar-method/One_Unit.png)

![All Units Done](/images/avatar-method/All_Unit.png)
