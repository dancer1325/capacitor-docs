---
title: Development Workflow
description: Capacitor Workflow
slug: /basics/workflow
---

# Capacitor Workflow

* != traditional web app workflow

## Steps
### Building your web code

* enable
  * 👀distribute your app / used it -- with -- Capacitor👀 
  * test your web app | mobile device 
* commands / build your web -- depend on -- used framework
  * | [Create React App](https://create-react-app.dev/) or [Vite](https://vitejs.dev/) -> use `npm run build`
  * | [Angular](https://angular.io/) -> use `ng build`

### Syncing your web code -- to -- your Capacitor project

* 💡== push web code | web native Capacitor application 💡
  * == "sync" web code + install/update the REQUIRED NATIVE dependencies
  * -- via -- `npx cap sync`
    * see [`sync`](/docs/cli/commands/sync.md)

### Testing your Capacitor app | mobile device
 
* ways
  * run a debug build of your Capacitor app
    * -- via -- built in Capacitor CLI commands
      * iOS device
        ```bash
        npx cap run ios
        ```
      * Android device
        ```bash
        npx cap run android
        ```
    * -- via -- NATIVE platform-tools
      * [run your app | iOS -- via -- Xcode](/docs/main/ios/index.md#---via----xcode)
      * [run your app | Android -- via -- Android Studio](/docs/main/android/index.md#---via----android-studio)
  * open your NATIVE IDE
    * | 
      * [iOS](/docs/main/ios/index.md#how-to-open-xcode)
      * [Android](/docs/main/android/index.md#how-to-open-the-android-project--android-studio)
    * vs run, allow
      * [create plugins](/docs/plugins.md)
      * [add custom native code](/docs/main/ios/custom-code.md), or
      * [compile your application -- for -- releasing](#compiling-your-native-binary) 

### Compiling your NATIVE binary

* == compile the final binary -- to distribute to -- OTHER mobile devices
  * ways
    * | AFTER `sync`, 👀open your target platform's IDE (Xcode for iOS OR Android Studio for Android) 👀
      * 👀recommended 👀
    * [`npx cap build`](/docs/cli/commands/build.md)
      * use cases
        * terminal or
        * CI environments
    * -- via -- automated tools
      * [Fastlane](https://fastlane.tools)
      * [Appflow](https://useappflow.com)
        * cloud build tool
* publishing guides | 
  * [iOS](/docs/main/ios/deploying-to-app-store.md) 
  * [Android](/docs/main/android/deploying-to-google-play.md)

### Updating Capacitor

* update Capacitor's Core, Android, and iOS libraries
  ```bash
  npm i @capacitor/core @capacitor/ios @capacitor/android
  npm i -D @capacitor/cli
  ```
  * ALL are uploaded SIMULTANEOUSLY
