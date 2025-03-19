---
title: Capacitor iOS API
description: The API for Capacitor on iOS
slug: /core-apis/ios
---

# Capacitor iOS API

* == native runtime / -- powers -- Capacitor apps | iOS

## iOS Bridge

* == Capacitor iOS library's heart / provide
  * information or
  * change behavior

* plugins -- have a weak reference to the -- bridge
  ```swift
  self.bridge?
  ```

* if your method requires the bridge -> use a guard -- to -- 
  * unwrap it
  * perform an early exit
  ```swift
  guard let bridge = self.bridge else { return }
  ```

### viewController

* MAIN view controller for Capacitor / -- used to PRESENT -- NATIVE views | app
  ```swift
  var viewController: UIViewController? { get }
  ```
* _Examples:_
  ```swift
  DispatchQueue.main.async {
    self.bridge?.viewController.present(ourCustomViewController, animated: true, completion: nil)
  }
  ```
* | iPad devices,
  * POSSIBLE to present popovers
    ```swift
    self.setCenteredPopover(ourCustomViewController)
    self.bridge.viewController.present(ourCustomViewController, animated: true, completion: nil)
    ```

### config

```swift
var config: InstanceConfiguration { get }
```

* 's property -- about -- Capacitor runtime

---

### triggerJSEvent(...)

```swift
func triggerJSEvent(eventName: String, target: String)
func triggerJSEvent(eventName: String, target: String, data: String)
// data == serialized JSON string value
```

* fire an event | [JavaScript `EventTarget`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)
  * _Example:_ `window` or `document`
* recommendations
  * use [Plugin Events](/docs/plugins/creating-plugins/ios-guide.md#plugin-events)

* _Examples:_
  ```swift
  bridge.triggerJSEvent(eventName: "myCustomEvent", target: "window")
  bridge.triggerJSEvent(eventName: "myCustomEvent", target: "document", data: "{ 'dataKey': 'dataValue' }")
  ```

### localURL(...)

```swift
func localURL(fromWebURL webURL: URL?) -> URL?
```

* web view
  * 's URL -- is translated into a -- file URL | native iOS
  * may handle DIFFERENT types of URLs
    * `res://`
      * == shortcut scheme | web assets
    * `file://`
      * == fully qualified URL -- to -- file | local device

---

### portablePath(...)

```swift
func portablePath(fromLocalURL localURL: URL?) -> URL?
```

* native iOS's file URL -- is translated into a -- URL / load | web view

---

## Passing data BETWEEN environments
 
* [here](/docs/main/reference/core-apis/data-types.md#ios)

## Saving CAPPluginCall

* persisting plugin calls -- for -- asynchronous OR repeated operations 
* [here](/main/reference/core-apis/saving-calls.md)
