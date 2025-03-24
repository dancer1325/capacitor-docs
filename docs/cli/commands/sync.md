---
title: CLI Command - cap sync
description: Capacitor CLI command - cap sync
contributors:
  - dotNetkow
sidebar_label: sync
---

# Capacitor CLI - cap sync

* == [`copy`](/docs/cli/commands/copy.md) + [`update`](/docs/cli/commands/update.md)
* `npx cap sync [options] [<platform>]`
  * `platform`
    * ALLOWED values
      * `android`,
      * `ios`
  * ALLOWED Options
    * `--deployment`
      * [here](update.md)
    * `--inline`
      * [here](copy.md)

## Hooks

* ALLOWED ones
  * `capacitor:sync:before`
  * `capacitor:sync:after`
* see [here](../hooks)
