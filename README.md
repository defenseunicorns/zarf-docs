# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

# Temporary Defense Unicorn notes for deploying locally
```

# Install npm if you don't have npm installed (on MacOS)
# FOR LINUX
    sudo apt update
    sudo apt install nodejs
    sudo apt install npm
# FOR MAC
    brew install nodejs

---

# FOR EVERYONE
# Install all the things, and run the server locally
npm i
npm run start
```


### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
