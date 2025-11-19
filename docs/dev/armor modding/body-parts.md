# HD2 Body Parts

All armors will come with a various amount of body parts that you will need to mod in order to properly port your modded armor into the game.

## Male and Female Parts

Every armor set will come with `Brawny` and `Lean` body parts, or `Stocky` and `Slim` body parts respectively. Some armors when imported will automatically label these parts for readability. We will just call these `Male` and `Female` parts.

Depending on what you what body type you intend to modify, you will need to figure out which part is which.

![male-female-preview](/images/armor-modding/male-female-edit.png)

Most armors will have a label that will tell if it is a male or female part.

![male-female-header](/images/armor-modding/male-female-header.png)

![male-female-header2](/images/armor-modding/male-female-header2.png)

However, some armors will not have this specified header. For example, take this B-24 shoulder piece.

![male-female-header3](/images/armor-modding/male-female-header3.png)

![male-female-header4](/images/armor-modding/male-female-header4.png)

In this case, you will need to look at the `meshes` and see which one is bigger than the other. Typically the larger one will be the `male` piece.

![male-female-header5](/images/armor-modding/male-female-header5.png)

Only certain body parts will have `male` and `female` counterparts. This list is as follows:

    Arms
    Shoulder Pads
    Chest
    Connections
    Waist
    Thighs
    Chest Accessories
    Hip Accessories

![gender-parts](/images/armor-modding/gender-parts-edit.png)

::: info
Shoulder pads, thighs, chest accessories, and hip accessories will not be available on all armors.

Connections are any parts that have a neck and/or lower back `mesh`. Sometimes there will only be a neck `mesh` and no lower back.
:::

## Shared Parts

These body parts are shared across both body types.

![shared-parts](/images/armor-modding/shared-parts-edit.png)

Multiple armors will also have body parts that are shared with each other. One of the worst examples of this is the B-01/CW-4 family.

![shared-parts2](/images/armor-modding/shared-parts2.png)

Similar colors means that those specific body parts are shared across those armor sets. You can view this spreadsheet by clicking on the `Archide IDs` button in the SDK modding menu.

This is something you may want to take note of when modding a specific armor set.