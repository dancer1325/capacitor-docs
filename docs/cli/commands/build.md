---
title: CLI Command - cap build
description: Capacitor CLI - cap build
sidebar_label: build
---

# Capacitor CLI - cap build

* build the NATIVE project / -- create a -- signed AAB, APK or IPA file 
* `npx cap build [options] <platform>`
  * `[options]`
    * 👀ways to specify it 👀
      * | CL OR
      * | your Capacitor Configuration File
    * ALLOWED
      * `--scheme <iOSSchemeToBuild>`
        * by default, `App`
      * `--flavor <AndroidFlavorToBuild>`
      * `--keystorepath <pathToTheKeyStoreFile>`
      * `--keystorepass <keystorePassword>`
      * `--keystorealias <keyStore'saliasKey>`
      * `--keystorealiaspass <keyStore'sPassword>`
      * `--androidreleasetype <release-type>`
        * ALLOWED values
          * `AAB` or
          * `APK`
  * `<platform>`
    * ALLOWED values
      * `android` 
      * `ios`
