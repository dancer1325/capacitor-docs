---
title: Subclassing CAPBridgeViewController
sidebar_label: Custom ViewController
description: How to subclass CAPBridgeViewController
contributors:
  - ikeith
slug: /ios/viewcontroller
---

# Custom ViewController

* | Capacitor 3.0+,
  * if you want -> you can subclass `CAPBridgeViewController`

## When to create a subclass ?

* LOW use cases
  * override Capacitor's configuration values | run-time,
  * change the [`WKWebViewConfiguration`](https://developer.apple.com/documentation/webkit/wkwebviewconfiguration)'s properties,
  * subsitute a CUSTOM subclass of [`WKWebView`](https://developer.apple.com/documentation/webkit/wkwebview)
  * integrate a 3rd party SDK / suggests adding code | [`viewDidLoad()`](https://developer.apple.com/documentation/uikit/uiviewcontroller/1621495-viewdidload),
  * manipulate native views BEFORE they appear onscreen,
  * [registering custom plugins](../ios/custom-code.md)

## Steps

### Create `MyViewController.swift`

* steps
  * right-clicking | **App** group (under the **App** target),
  * selecting **New File...** | context menu,
  * choosing **Cocoa Touch Class** | window,
  * set the **Subclass of:** -- to -- `UIViewController` | next screen,
  * save the file

![New ViewController in Xcode](../../../static/img/v6/docs/ios/xcode-create-viewcontroller.png)
![Name ViewController in Xcode](../../../static/img/v6/docs/ios/xcode-name-viewcontroller.png)

### Edit `Main.storyboard`

* steps
  * select the `Main.storyboard` file | Project Navigator,
  * select the **Bridge View Controller** | **Bridge View Controller Scene**,
  * select the **Identity Inspector** on the right,
  * change the name of the custom class -- to -- `MyViewController`

![Editing Storyboard in Xcode](../../../static/img/v6/docs/ios/xcode-edit-storyboard.png)

### Edit `MyViewController.swift`

* steps
  * select the `MyViewController.swift` file | Project Navigator
  * edit it / 
    * import Capacitor
    * change the parent class
    ```swift
    import UIKit
    import Capacitor
    
    class MyViewController: CAPBridgeViewController {
        // additional code
    }
    ```

### Next Steps

* `viewDidLoad()` method
  * Xcode -- should have -- ALREADY created it
* if you need OTHER Capacitor-specific methods -> see [`CAPBridgeViewController`](https://github.com/ionic-team/capacitor/blob/main/ios/Capacitor/Capacitor/CAPBridgeViewController.swift) 
* ANYTHING / marked `open` -> explicitly exposed -- for -- subclasses / override
