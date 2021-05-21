# Introduction

This web-app aims to inform about about bees 🐝, what they do, why they are needed and what problem they face.

This is an open source project. The entire source code resides in this repository. It was originally created as my project work for my examination as application developer

# Getting Started

1. Make sure you have node installed on your system.
2. Clone this repo:
   ```bash
   $ git clone … && cd…
   ```
3. Start the development server
   ```bash
   $ npm run dev
   ```
4. Open localhost:5000 in your browser.

   You can now make changes to the source code and they will automatically be reflected in the app in the browser.

   Try it out for yourself!

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in the package.json's `dependencies`.

# How to empty node_modules:

```bash
rm -rf node_modules/* node_modules/.*
```

... and then create a new file: _local_ or _docker_volume_
