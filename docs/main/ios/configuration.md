---
title: Configuring iOS
description: Configuring iOS
contributors:
  - dotNetkow
  - mlynch
slug: /ios/configuration
---

# Configuring iOS

## Configuring `Info.plist`

* `Info.plist`
  * == iOS apps' MAIN configuration file 
  * 👀if a Capacitor plugin requires new settings or permissions -> you -- may need to -- edit it 👀
  * Raw Keys
    * [ALLOWED](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Introduction/Introduction.html) 
    * ways to visualize / edit
      * right-clicking | table, check **Raw Keys & Values** | context menu
      * MANUALLY | `ios/App/App/Info.plist`

## Managing Permissions

* ❌NO need to specify them EXPLICITLY ❌ 
  * != Android 
* requirements
  * "Usage Descriptions" | `Info.plist`
    * == human-readable descriptions / if permission are requested / particular device API -> presented | end user
    * [ALLOWED Cocoa Keys](https://developer.apple.com/library/content/documentation/General/Reference/InfoPlistKeyReference/Articles/CocoaKeys.html)
    * [How to resolve the Privacy-Sensitive Data App Rejection](https://developer.apple.com/library/content/qa/qa1937/_index.html)

## Setting Capabilities

* Setting Capabilities
  * enable key features / your app may need
  * use cases
    * Capacitor plugin requires it
  * ❌NOT configured | `Info.plist` ❌
  * steps to add a NEW one
    * [open your app | Xcode](/main/ios/index.md#opening-the-ios-project), 
    * select the **App** project and the **App** target,
    * click **Signing & Capabilities** | tab bar,
    * click the **+ Capability** button 
  * [MORE information](https://developer.apple.com/documentation/xcode/adding_capabilities_to_your_app)

![Xcode Capabilities](../../../static/img/v6/docs/ios/xcode-capabilities.png)

## Renaming your App

* -- via -- renaming the **App** target
  * steps
    * [open your project | Xcode](/main/ios/index.md#opening-the-ios-project),
    * select the **App** project,
    * double-click the **App** target
      ![Xcode Target](../../../static/img/v6/docs/ios/xcode-target.png)
    * | `ios/App/Podfile`, rename the CURRENT target
      ```diff
      -target 'App' do
      +target 'MyRenamedApp' do
      capacitor_pods
      # Add your Pods here
      end
      ```
    * | [Capacitor configuration file](/docs/main/reference/config.md#schema),
      * add `ios` object's `scheme` attribute 
* `App` directory
  * ❌can NOT be renamed ❌  

## Deeplinks (aka Universal Links)

* [here](/docs/main/guides/deep-links.md)
