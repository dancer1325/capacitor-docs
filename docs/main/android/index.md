---
title: Capacitor Android Documentation
sidebar_label: Getting Started
slug: /android
description: Capacitor Android Documentation
contributors:
  - mlynch
  - jcesarmobile
---

# Capacitor Android Documentation

* Capacitor -- features a -- native Android runtime /
  * enables developers to communicate between JavaScript -- & -- Native Java or Kotlin code
* Capacitor Android apps -- are configured & managed through -- Android Studio

## Android Support

* requirements
  * Android WebView / Chrome v60+ 
* API 23+ (Android 6 or later)
  * == 99% of the Android market
* | Android
  * v6 & v10+,
    * Capacitor -- uses the -- [Android System WebView](https://play.google.com/store/apps/details?id=com.google.android.webview)
  * v7-9,
    * [Google Chrome](https://play.google.com/store/apps/details?id=com.android.chrome) -- provides the -- WebView

## How to install?

```bash
npm install @capacitor/android
```

```bash
npx cap add android
```

## How to open the Android Project | Android Studio?

* ways
  * AUTOMATICALLY -- via -- built-in command
    ```bash
    npx cap open android
    ```
  * MANUALLY open Android Studio & import the `android/` directory -- as an -- Android Studio project

## How to run?

* requirements,  
  * | Android Emulator,
    * API v24+ system image
    * ❌System WebView does NOT automatically update ❌
    * [how to create an Android emulator](https://developer.android.com/studio/run/managing-avds)
  * | Physical devices,
    * [API 23, version / System WebView is updated]

### -- via -- CL

*
  ```bash
  npx cap run android
  ``` 
  * see [`run`](/cli/commands/run.md)

### -- via -- Android Studio

* select the device OR emulator, click the run OR debug button
  ![Running App](../../../static/img/v6/docs/android/running.png)

## Troubleshooting

* [Android Troubleshooting Guide](troubleshooting.md)

## Example
* _Example:_ [here](/examples/angularApp)