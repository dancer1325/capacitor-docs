---
title: Privacy Manifest
description: Adding a Privacy Manifest to your iOS app
slug: /ios/privacy-manifest
---

* [NEW privacy protocols / third-party SDKs](https://developer.apple.com/news/?id=3d8a9yyh) | WWDC23
  * == approved reasons -- for -- API usage | their SDKs
    * MANDATORY, from May 1st, 2024 
    * -> App Store Connect -- will notify -- users 
    * Reason: 🧠enhance transparency & user privacy 🧠

## Steps -- to -- meet Requirements

* certain plugins -- may necessitate a -- Privacy Manifest File
  * _Example:_ `@capacitor/filesystem` & `@capacitor/preferences`  
* steps
  * Update Capacitor
    * | Capacitor 7, `>= 7.0.0`
    * | Capacitor 6, `>= 6.0.0`
    * | Capacitor 5, `>= 5.7.4`
    * | Capacitor 4, `>= 4.8.2`
    * | Capacitor <= 3, ❌NOT supported ❌
  * create the privacy manifest file -- via --
    * VS Code Extension
    * MANUALLY

### VS Code Extension

* install [Ionic VS Code extension](https://ionic.link/vscode) 
* open your project
  * | recommendations, 
    * if your application is using a plugin / uses certain APIs -> see *Add Privacy Manifest*
      ![No Manifest](/static/img/v6/docs/ios/no-manifest.png)
    * Choose Yes -- to create the -- bare minimum privacy manifest file -> extension -- will list -- ALL changes / needed as recommendations "*Missing Privacy Manifest Category*"
      ![Privacy Change](/static/img/v6/docs/ios/privacy-change.png)
    * select 1 reason codes / explain how you use the plugin
      * if you are unsure -> click *Docs*
    * if you are STILL being rejected by Apple -- for -- missing privacy manifest reasons
      * Possible Reason: 🧠you are using a plugin / extension does NOT know 🧠
        * == VS Code extension -- has a -- set of rules for known plugins 
      * Note: open an issue | [VS Code extension issue tracker](https://github.com/ionic-team/vscode-ionic/issues)

### Manual Steps

* TODO: 
* If you would prefer to perform the steps for creating a Privacy Manifest file manually open Xcode then:

Choose *File > New File*.

Scroll down to the *Resource* section and select *App Privacy File* type.

Click *Next*.

Check your app in the *Targets* list.

Click *Create*.

A file called `PrivacyInfo.xcprivacy` will be created.
This file is challenging to create interactively in the Xcode UI so it may be easier to edit it manually by right clicking it and choosing *Open with External Editor*.

As a sample file here is a `PrivacyInfo.xcprivacy` file that uses the UserDefaults API through its use of the `@capacitor/preferences` plugin.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>NSPrivacyTracking</key>
    <false/>
    <key>NSPrivacyAccessedAPITypes</key>
    <array>
      <dict>
        <key>NSPrivacyAccessedAPIType</key>
        <string>NSPrivacyAccessedAPICategoryUserDefaults</string>
        <key>NSPrivacyAccessedAPITypeReasons</key>
        <array>
          <string>CA92.1</string>
        </array>
      </dict>
    </array>
    <key>NSPrivacyTrackingDomains</key>
    <array/>
  </dict>
</plist>
```

To find code and plugins which may require privacy manifest changes you can use a script like [this one](https://github.com/Wooder/ios_17_required_reason_api_scanner) by running `sh required_reason_api_text_scanner.sh node_modules` .

To choose the correct reason codes (like `CA92.1` in the above example) you will need to read [Apple’s documentation](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files/describing_use_of_required_reason_api).

## Before Store Submission

Before App store submission you may need to disclose user tracking, tracking domains or collection of other data types that are unique for your application. 
See [Apple’s documentation](https://developer.apple.com/documentation/bundleresources/privacy_manifest_files) for more information.
