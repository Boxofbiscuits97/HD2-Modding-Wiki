---
prev: true
next: true
description: Aligning Magazines with your weapons
---

# Aligning Magazines

For messing around with animations for weapons, you more than likely want to see where the magazine for your weapon is. Since weapons in Helldivers 2 can have different magazines, the weapon and the magazine are two separate rigs.

To view animations with a magazine, you will need to parent the magazine to the weapon's `attach_mag` bone. Here's the simplest method to do that:

1. Load both weapon and magazine, making sure to merge armatures off either in the settings or that you don’t have the rig selected when you import the other unit. You should see two separate armatures in the scene, one for the weapon and one for the mag.
![Import Weapon and Mag](/images/animation/import-weapon-and-mag.png)

2. Select the magazine's armature.
![Select Mag](/images/animation/select-magazine-armature.png)

3. Navigate to the magazine's constraints tab.
![View Constraints](/images/animation/constraints-tab.png)

4. Click Add Object Constraint, and select Child Of.
![Add Child Of Constraint](/images/animation/child-of-constraint.png)

5. For the target of the Child Of constraint, select the weapon's armature.
![Select Target](/images/animation/child-of-target.png)

6. A sub-target labeled Bone will appear. In this drop down, select attach_mag.
![Select Bone](/images/animation/child-of-bone.png)

7. The magazine will move to the location of the attach_mag bone.
![Magazine Moved](/images/animation/magazine-moved-good-rotation.png)

::: tip
Sometimes the magazine will be rotated oddly, like here.
![Magazine Moved Rotated Incorrectly](/images/animation/magazine-moved-bad-rotation.png)

To fix the rotation:
* Select the magazine's armature in the viewport and hit `R` then `X`. You will go into X-axis rotation mode, and you can rotate the magazine by either moving the mouse until it lines up, or by typing a specific angle in the viewport. You can confirm the rotation by left clicking or hitting `Enter`, and you can cancel by right clicking or hitting `Esc`.
![Magazine Rotation Mode](/images/animation/rotation-mode.png)

* It is likely you need to rotate by 90 degrees in one direction or another, so you can type `90` to be precise.
![Magazine Rotated Wrong 90](/images/animation/rotate-90-wrong.png)

* If the typed value is the wrong direction, you can hit the `-` key to reverse the direction of rotation.
![Magazine Rotated 90](/images/animation/rotate-90-right.png)

* Finally hit `Enter` to confirm the changes.
:::

### Now you can preview animations with your magazine!
<video autoplay="autoplay" loop="loop" src="/images/animation/weapon-reload.mp4" />

