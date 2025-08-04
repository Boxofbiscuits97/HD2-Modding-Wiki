# Special Tools

This section is primarily used for modders to find archives.

If you have the numerical ID or the HexID of a object, you can use this tooling to find the archive that it exists in.

![special-tools-preview](../public/images/sdk-settings/special-tools.png)

### Unload Empty Archives

Ignores any archives that do not have any `textures`, `meshes`, and `materials`.

### Unload Previous Patches

When using the `Bulk Load` feature, will unload all previous patches created within the SDK.

### Bulk Load

Loads all `patch files` listed in the `.txt` file into the SDK.

![bulk-load-preview](../public/images/sdk-settings/bulk-load.png)

::: warning
`Patch Files` must be inside the data folder in order for this to work.
:::

### Search by Entry ID

Finds the archive of the listed numerical ID or HexID of the `.txt` file.

Set your output path first by clicking on `Charge Searchpath`. 

![search-by-entry-id-preview](../public/images/sdk-settings/search-by-entry-id.png)

Put all numerical IDs and HexIDs of the objects you want to find the archives for into a .txt file.

![search-by-entry-id2-preview](../public/images/sdk-settings/search-by-entry-id2.png)

Click on `Search by Entry ID` and navigate to the location of your `.txt` file.

Navigate to your output folder and listed inside that `.txt` file will have all the archives where the object is found listed in the first column.

![search-by-entry-id3-preview](../public/images/sdk-settings/search-by-entry-id3.png)