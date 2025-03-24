---
title: CLI Command - cap run
description: Capacitor CLI - cap run
sidebar_label: run
---

# Capacitor CLI - cap run

* == [`sync`](/docs/cli/commands/sync.md) + [`build`](build.md) + deploys the native app | target device
* `npx cap run [options] <platform>`
  * `platform`
    * ALLOWED values
      * `android`,
      * `ios`
  * ALLOWED Options
    * `--flavor <AndroidFlavor>`
    * `--list`
      * print a list of target devices / AVAILABLE | given platform
    * `--no-sync`
      * == NOT run `sync` command
    * `--scheme <iOSScheme>`
    * `--configuration <iOSSchemaConfigurationName>`
    * `--target <tagetIdOrDevice>`
    * `--live-reload` OR `-l`
      * == enable Live Reload
    * `--host <host>`
      * == live reload / from the specified host -- load the -- web view 
    * `--port <port>`
      * == live reload / from the specified host -- load the -- web view
    * `--forwardPorts <port1:port2>`
      * == AUTOMATICALLY run "adb reverse" -- for -- BETTER live-reloading support

