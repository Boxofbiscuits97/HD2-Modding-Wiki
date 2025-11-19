# Material Slot Order

In HD2, the slot of the `material` determines what `vertex groups` are assigned to what `bones` on the `armature`. 

This means that if all the `weights` are assigned to material slot 2, assigning the `material` you are using for your `mesh` to slot 1 will cause the `weights` to be completely wrong.

To demonstrate this, let's take the I-102 Brawny Arm Right. You can see in the picture below that the gore `material` is `12070197922454493211`. (This is the same across all armor sets.) It is currently occupying material slot 1.

The gore `material` is only weighted to a single bone usually, while the other `material` will be the actual `material` of the arm that is weighted to the other `bones` of the HD2 `armature`. The actual `mesh` `material` is occupying material slot 2.

![material-order](/images/materials/material-order.png)

If I swap these material slots around this will happen in-game.

![material-order2](/images/materials/material-order2.png)

::: warning
Material slot order is different for every armor set per body part per body type. There is no consistency between the armor sets so you will need to check the base game part you are replacing to ensure you have the correct material slot order
:::

This is <u>**not**</u> exclusive to armor sets and can also be found on enemies and weapons as well.