---
title: Getting Started
description: Communicate between JavaScript and Native Swift or Objective-C code
slug: /ios
contributors:
  - dotNetkow
  - mlynch
---

# Capacitor iOS Documentation

* Capacitor -- features a -- native iOS runtime / 
  * enables developers to communicate between JavaScript -- & -- Native Swift or Objective-C code
  * -- is configured & managed with -- Xcode & [CocoaPods](https://cocoapods.org/)

## iOS Support

* requirements
  * Xcode 16.0+
  * see [Environment Setup](/main/getting-started/environment-setup.md#ios-requirements)
* iOS 14+ 
* 👀Capacitor -- uses -- [WKWebView](https://developer.apple.com/documentation/webkit/wkwebview) 👀
  * NOT the deprecated [UIWebView](https://developer.apple.com/documentation/uikit/uiwebview) 

## How to install?

```bash
npm install @capacitor/ios
```

```bash
npx cap add ios
```

## How to open XCode?

* ways
  * AUTOMATICALLY open XCode & run it
    ```bash
    npx cap open ios
    ```
  * MANUALLY open Xcode & run
    ```bash
    open ios/App/App.xcworkspace
    ```

## How to run?

### -- via -- CL

* valid to run |
  * device or
  * simulator
* 
  ```bash
  npx cap run ios
  ```
  * see [`run`](/docs/cli/commands/run.md)

### -- via -- Xcode

* device OR simulator, click play button
  ![Running your app](../../../static/img/v6/docs/ios/running.png)

## Troubleshooting

* see [iOS Troubleshooting Guide](/docs/main/ios/troubleshooting.md)
