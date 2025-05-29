# Helldivers 2 Modding Wiki
The Modding Wiki Site for Helldivers 2

Go to the site [Here](https://boxofbiscuits97.github.io/HD2-Modding-Wiki/)

## Contributing to the Site
> [!NOTE]
> This is a tutorial about developing in [VSCode](https://code.visualstudio.com/). If you do not have VSCode, install it [Here](https://code.visualstudio.com/).
> VSCode is not explicitly required but it is extremely useful for development with it's integrations with Github.

1. Assure the **SDK is uninstalled**
2. [Create a fork of the repository](https://github.com/Boxofbiscuits97/HD2-Modding-Wiki/fork)
3. Copy the link to your forked page
5. Open VSCode and go to the Source Control Tab
6. Click clone repository and paste the link to your fork

Now that your fork is setup, you can start developing.
[Vitepress General Guide](https://vitepress.dev/guide/getting-started)

You will have to run these next commands in the terminal to get things going.
To open the terminal go to `View > Terminal` in the file bar at the top of the window.

To install dependencies:
```shell
npm ci
```

> [!NOTE]
> If you encounter any errors with npm, it is likely because you do not have nodejs installed.
> [Install Nodejs Here](https://nodejs.org/)

Run a preview of the wiki locally:
```shell
npm run docs:dev
```

Once your changes have been made, you can create a pull request in the Source Control Tab.

## Helpful Guidelines for Contributing
[Vitepress Writing Guide](https://vitepress.dev/guide/markdown)

- All guides are markdown (`.md`) files placed in the `/docs/` folder.
- Properly Organize your guides into proper folders. Try not to nest too many folders.
- Keep all of your image content in the `/docs/.vitepress/public/images/` folder. You can create a sub folder in this directory for *each* page you write.