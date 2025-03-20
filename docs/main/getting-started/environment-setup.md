---
title: Environment Setup
description: Setting up a development environment for Capacitor
slug: /getting-started/environment-setup
---

# Environment Setup

* 👀officially supported application targets 👀
  * Android,
  * iOS,
  * Web
* for Desktop target -> use
  * [Windows](https://ionic.io/docs/windows/usage) or
  * [Electron](https://github.com/capacitor-community/electron) apps

## Core Requirements

* NodeJS 20+
  * enables creating [Progressive Web Applications (PWA)](../web/progressive-web-apps.md)

## iOS Requirements

* own a **macOS**
  * ALTERNATIVES
    * [Ionic Appflow](http://ionicframework.com/appflow)
      * -- can perform -- iOS cloud builds
* dependencies or tools
  * Xcode
  * Xcode Command Line Tools
  * Homebrew
  * Cocoapods

### Xcode

* == Apple's IDE -- for -- creating native applications
  * macOS,
  * iOS,
  * iPadOS
* install -- via -- [Apple App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
* | Capacitor 7,
  * Xcode 16.0+

### Xcode Command Line Tools

* == additional tools / NOT included | Xcode's core
  * -- required for -- building & testing your application 

* `xcode-select --install` 
  * install the Xcode Command Line Tools
  * requirements
    * having installed PREVIOUSLY Xcode
  * `xcode-select -p`
    * check the RIGHT installation

### Homebrew

* == package manager -- for -- macOS packages 
* [how to install](https://brew.sh)
* Reason why it's required: 🧠RECOMMENDED way to install -- CocoaPods 🧠

### CocoaPods

* == iOS dependency manager / used by Capacitor -- to -- install & manage native dependencies / your iOS project

#### -- via -- Homebrew
* `brew install cocoapods`
* `pod --version`
  * verify that CocoaPods is installed

#### -- via -- Ruby Gem
* `sudo gem install cocoapods`
* | Apple Silicon Macs
  * ❌NOT valid DIRECTLY ❌
  * -> run CocoaPods -- through -- Rosetta enabled
    ```bash
    sudo arch -x86_64 gem install ffi
    ```
  * | update your application / use NEW version of your web code ->
    ```bash
    npx cap copy
    arch -x86_64 pod install
    ```

## Android Requirements

### Android Studio

* == Google's IDE -- for -- creating native Android applications
* [Android Studio download page](https://developer.android.com/studio) 
  * includes JDK
* |Capacitor 7,
  * Android Studio 2024.2.1+

### Android SDK

* goal
  * install
    * Android SDK Tools
    * Android SDK Platforms / API 23+

* | Android Studio,
  * **Tools -> SDK Manager** | menu
  * install the platform versions / like to test with | **SDK Platforms** tab
    ![SDK Platforms](/img/v6/docs/android/sdk-platforms.png)
