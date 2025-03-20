---
title: Custom Native iOS Code
description: Custom Native iOS Code
contributors:
  - dotNetkow
  - mlynch
slug: /ios/custom-code
---

# Custom Native iOS Code

* == write WebView-accessible Swift or Objective-C code
* enable
  * implement your needed native features
* alternative
  * use [a Capacitor plugin](/docs/plugins.mdx)
    * ❌maybe NOT exist / use case ❌
    * recommended & easy one

## WebView-Accessible Native Code

### `EchoPlugin.swift`

* steps to create
  * [opening Xcode](/docs/main/ios/index.md#how-to-open-xcode),
  * right-clicking | **App** group (under the **App** target),
  * select **New File...** | context menu,
  * choose **Swift File** | window,
  * create the file
  ![New Swift File in Xcode](../../../static/img/v6/docs/ios/xcode-new-swift-file.png)
  * copy & paste the code
    ```swift
    import Capacitor
    
    @objc(EchoPlugin)   // make sure Capacitor's runtime -- can -- see it
    public class EchoPlugin: CAPPlugin, CAPBridgedPlugin {
        public let identifier = "EchoPlugin"
        public let jsName = "Echo"
        public let pluginMethods: [CAPPluginMethod] = [
            CAPPluginMethod(name: "echo", returnType: CAPPluginReturnPromise)
        ]
    
        @objc func echo(_ call: CAPPluginCall) {
            let value = call.getString("value") ?? ""
            call.resolve(["value": value])
        }
    }
    ```

### Register the Plugin

* register CUSTOM plugins | iOS & web 
  * ⚠️MANDATORY ⚠️
    * Reason: 🧠 Capacitor can bridge between Swift -- & -- JavaScript 🧠

#### `MyViewController.swift`

* steps
  * [create a CUSTOM `MyViewController.swift`](../ios/viewcontroller.md)
  * override `capacitorDidLoad()` / register the plugin
    ```swift
    override open func capacitorDidLoad() {
        bridge?.registerPluginInstance(EchoPlugin())
    }
    ```

#### JavaScript

* `@capacitor/core`'s `registerPlugin()`
  * create an object / linked -- to -- OUR Swift plugin
  ```javascript
  import { registerPlugin } from '@capacitor/core';
  
  // 'Echo' == plugin name == `EchoPlugin.m`'s `CAP_PLUGIN` macro 's second parameter  
  const Echo = registerPlugin('Echo');
  
  export default Echo;
  ```

  ```diff, typescript
   import { registerPlugin } from '@capacitor/core';
  
  +export interface EchoPlugin {
  +  echo(options: { value: string }): Promise<{ value: string }>;
  +}
  
  -const Echo = registerPlugin('Echo');
  +const Echo = registerPlugin<EchoPlugin>('Echo');   // <EchoPlugin>     == linked object's structure
   
   // if you want to ignore types -> use registerPlugin<any>('Echo') 
   export default Echo;
  ```

### Use the Plugin

* `Echo` object -- can call -- your plugin methods
  * _Example:_ call into Swift on iOS & print the result
    ```typescript
    import Echo from '../path/to/echo-plugin';
    
    const { value } = await Echo.echo({ value: 'Hello World!' });
    console.log('Response from native:', value);
    ```

### Next Steps

* [iOS Plugin Guide](/docs/plugins/creating-plugins/ios-guide.md)
