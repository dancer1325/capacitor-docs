---
title: CLI Command - cap copy
description: Capacitor CLI command - cap copy
contributors:
  - dotNetkow
sidebar_label: copy
---

# Capacitor CLI - cap copy

* 💡web app build & Capacitor configuration file -- is copied into the -- NATIVE platform project 💡
* use cases
  * run it EACH time / you 
    * make changes | your web app or
    * change a configuration value
* `npx cap copy [<platform>] [options]`
  * `platform`
    * ALLOWED values
      * `android`,
      * `ios`
  * ALLOWED options
    * `--inline`
      * AFTER syncing, ALL JS source maps -- will be -- inlined
        * -> enable debugging an Android Web View | Chromium-based browsers

## Hooks

* ALLOWED ones
  * `capacitor:copy:before`
  * `capacitor:copy:after`
* see [here](../hooks)
