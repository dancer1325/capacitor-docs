---
title: Swift Package Manager
description: SPM Basics
contributors:
  - giralte-ionic
slug: /ios/spm
---

# Swift Package Manager

* Swift Package Manager
  * == Apple's NEW first-party tool -- for -- software dependencies
* Capacitor
  * about managing dependencies internally & plugins
    * | ORIGINALLY, -- via -- CocoaPods
    * | Capacitor v6+,
      * ALLOWED
        * CocoaPods or
        * Swift Package Manager (SPM)
          * -- supported by -- MOST [capacitor-plugins](https://github.com/ionic-team/capacitor-plugins)

### How does Capacitor work -- with -- SPM?

* 💡-- via -- 'Base SPM' package / references ALL your projects dependencies 💡
  ![Base SPM Picture](../../../static/img/v6/docs/ios/spm/base-spm.png)

* if you sync NEW plugins -> Capacitor CLI -- will modify the -- "CapAPP-SPM package"
  * ❌recommended NOT modify MANUALLY "CapAPP-SPM package" ❌
    * Reason: 🧠changed AUTOMATICALLY by CLI 🧠

### How to use SPM | NEW Capacitor project?

* steps
  * `npm init @capacitor/app@latest`
    ![Demo Step 1](../../../static/img/v6/docs/ios/spm/demo-step1.png)
  * `npm install @capacitor/ios`
    * add the iOS platform | OUR project
  * `npm run build`
    * build the web project
  * `npx cap add ios --packagemanager SPM`
    * add the iOS project / specify `--packagemanager SPM`
  * `npx cap open ios`
    * open the iOS project & run your app

### How to add a Capactior Plugin -- via -- SPM?

* _Example:_ use Capacitor App plugin
  * `npm install @capacitor/app`
  * `npx cap sync`
    * sync the web app
    * add the App plugin SPM | iOS project

### How to convert EXISTING plugins -- to -- SPM?

* [here](https://github.com/ionic-team/capacitor-plugin-converter)

### Troubleshooting

* 'reset package caches' | Xcode
  ![Demo Step 1](../../../static/img/v6/docs/ios/spm/reset-package.png)
