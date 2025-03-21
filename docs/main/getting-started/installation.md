---
title: Installing Capacitor
description: Installing Capacitor
slug: /getting-started
---

# Installing Capacitor

* use cases
  * create a NEW Capacitor application
  * add Capacitor | EXISTING web project 
* ways to install
  * CLI
  * [VS Code extension](../vs-code-ext/0-getting-started.mdx)
* requirements
  * [environment is set up](environment-setup.md)

## use cases
### create a NEW Capacitor app

* `npm init @capacitor/app@latest`
  * `@capacitor/create-app`
    * == package -- to quickly create a -- Capacitor application
* _Example:_ [here](/examples/newCapacitorApp)

### Add Capacitor | EXISTING web app

* Capacitor's design
  * drop | ANY modern JavaScript web app /
    * 's requirements
      * `package.json` file
      * SEPARATE directory -- for -- built web assets 
        * _Example:_ `dist` or `www`
      * `index.html` | root of your web assets directory
        * ⚠️`<head>` is REQUIRED ⚠️
          * Reason: 🧠properly inject Capacitor 🧠
* | your app's root
  *
    ```bash
    # Capacitor's core JavaScript runtime  
    npm i @capacitor/core   
  
    # Capacitor's CLI
    npm i -D @capacitor/cli
    ```
  * `npx cap init`
    * initialize Capacitor -- via a -- questioner
      * == create the [capacitor-config file](../reference/config)
        * _Example:_ `webDir`== expected output directory / build process
          * `www` -- for -- Angular,
          * `build` -- for -- React,
          * `public` -- for -- Vue
  * `npm i @capacitor/android @capacitor/ios`
    * install the Android & iOS platforms
  *
    ```bash
    # create Android project
    npx cap add android
  
    # create iOS project
    npx cap add ios
    ```
  * `npx cap sync`
    * sync your web application -- to -- your native project
      * built web bundle expected | [Capacitor Config](/docs/config)'s `webDir` -- will be copied to -- your native project
      * install the native project's dependencies
* _Example:_ [here](/examples/angularApp)