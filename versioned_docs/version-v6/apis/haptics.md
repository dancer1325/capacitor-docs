---
title: Haptics Capacitor Plugin API
description: The Haptics API provides physical feedback to the user through touch or vibration.
custom_edit_url: https://github.com/ionic-team/capacitor-plugins/blob/6.x/haptics/README.md
editApiUrl: https://github.com/ionic-team/capacitor-plugins/blob/6.x/haptics/src/definitions.ts
sidebar_label: Haptics
---

# @capacitor/haptics

The Haptics API provides physical feedback to the user through touch or vibration.

On devices that don't have Taptic Engine or Vibrator, the API calls will resolve without performing any action.

## Install

```bash
npm install @capacitor/haptics
npx cap sync
```

## Example

```typescript
import { Haptics, ImpactStyle } from '@capacitor/haptics';

const hapticsImpactMedium = async () => {
  await Haptics.impact({ style: ImpactStyle.Medium });
};

const hapticsImpactLight = async () => {
  await Haptics.impact({ style: ImpactStyle.Light });
};

const hapticsVibrate = async () => {
  await Haptics.vibrate();
};

const hapticsSelectionStart = async () => {
  await Haptics.selectionStart();
};

const hapticsSelectionChanged = async () => {
  await Haptics.selectionChanged();
};

const hapticsSelectionEnd = async () => {
  await Haptics.selectionEnd();
};
```

## API

<docgen-index>

* [`impact(...)`](#impact)
* [`notification(...)`](#notification)
* [`vibrate(...)`](#vibrate)
* [`selectionStart()`](#selectionstart)
* [`selectionChanged()`](#selectionchanged)
* [`selectionEnd()`](#selectionend)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### impact(...)

```typescript
impact(options?: ImpactOptions | undefined) => Promise<void>
```

Trigger a haptics "impact" feedback

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#impactoptions">ImpactOptions</a></code> |

**Since:** 1.0.0

--------------------


### notification(...)

```typescript
notification(options?: NotificationOptions | undefined) => Promise<void>
```

Trigger a haptics "notification" feedback

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#notificationoptions">NotificationOptions</a></code> |

**Since:** 1.0.0

--------------------


### vibrate(...)

```typescript
vibrate(options?: VibrateOptions | undefined) => Promise<void>
```

Vibrate the device

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#vibrateoptions">VibrateOptions</a></code> |

**Since:** 1.0.0

--------------------


### selectionStart()

```typescript
selectionStart() => Promise<void>
```

Trigger a selection started haptic hint

**Since:** 1.0.0

--------------------


### selectionChanged()

```typescript
selectionChanged() => Promise<void>
```

Trigger a selection changed haptic hint. If a selection was
started already, this will cause the device to provide haptic
feedback

**Since:** 1.0.0

--------------------


### selectionEnd()

```typescript
selectionEnd() => Promise<void>
```

If selectionStart() was called, selectionEnd() ends the selection.
For example, call this when a user has lifted their finger from a control

**Since:** 1.0.0

--------------------


### Interfaces


#### ImpactOptions

| Prop        | Type                                                | Description                                                                                                                                                                              | Default                        | Since |
| ----------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ | ----- |
| **`style`** | <code><a href="#impactstyle">ImpactStyle</a></code> | Impact Feedback Style The mass of the objects in the collision simulated by a [UIImpactFeedbackGenerator](https://developer.apple.com/documentation/uikit/uiimpactfeedbackstyle) object. | <code>ImpactStyle.Heavy</code> | 1.0.0 |


#### NotificationOptions

| Prop       | Type                                                          | Description                                                                                                                                                                                       | Default                               | Since |
| ---------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | ----- |
| **`type`** | <code><a href="#notificationtype">NotificationType</a></code> | Notification Feedback Type The type of notification feedback generated by a [UINotificationFeedbackGenerator](https://developer.apple.com/documentation/uikit/uinotificationfeedbacktype) object. | <code>NotificationType.SUCCESS</code> | 1.0.0 |


#### VibrateOptions

| Prop           | Type                | Description                                | Default          | Since |
| -------------- | ------------------- | ------------------------------------------ | ---------------- | ----- |
| **`duration`** | <code>number</code> | Duration of the vibration in milliseconds. | <code>300</code> | 1.0.0 |


### Enums


#### ImpactStyle

| Members      | Value                 | Description                                                  | Since |
| ------------ | --------------------- | ------------------------------------------------------------ | ----- |
| **`Heavy`**  | <code>'HEAVY'</code>  | A collision between large, heavy user interface elements     | 1.0.0 |
| **`Medium`** | <code>'MEDIUM'</code> | A collision between moderately sized user interface elements | 1.0.0 |
| **`Light`**  | <code>'LIGHT'</code>  | A collision between small, light user interface elements     | 1.0.0 |


#### NotificationType

| Members       | Value                  | Description                                                                    | Since |
| ------------- | ---------------------- | ------------------------------------------------------------------------------ | ----- |
| **`Success`** | <code>'SUCCESS'</code> | A notification feedback type indicating that a task has completed successfully | 1.0.0 |
| **`Warning`** | <code>'WARNING'</code> | A notification feedback type indicating that a task has produced a warning     | 1.0.0 |
| **`Error`**   | <code>'ERROR'</code>   | A notification feedback type indicating that a task has failed                 | 1.0.0 |

</docgen-api>