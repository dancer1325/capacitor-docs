---
title: CLI Command - cap update
description: Capacitor - cap update
contributors:
  - dotNetkow
sidebar_label: update
---

# Capacitor CLI - cap update

* updates the NATIVE 
  * plugins / referenced | `package.json`
  * dependencies / referenced | `package.json`
* `npx cap update [<platform>] [options]`
  * `platform`
    * ALLOWED values
      * `android`,
      * `ios`
  * ALLOWED options
    * `--deployment`
      * ❌Podfile.lock -- will NOT be -- deleted ❌
      * pod install -- will use -- `--deployment` 

## Hooks

* ALLOWED ones
  * `capacitor:copy:before`
  * `capacitor:copy:after`
* see [here](../hooks)
