# alpaka-native-useragent

[![npm version](https://badge.fury.io/js/@alpakaio/alpaka-native-useragent.svg)](http://badge.fury.io/js/@alpakaio/alpaka-native-useragent)

User Agent builder used by [Alpaka](https://www.alpaka.io) [React Native](https://github.com/facebook/react-native) apps.

## TOC

* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
* [Troubleshooting](#troubleshooting)
* [Release Notes](#release-notes)
* [react-native-dom / react-native-web](#react-native-dom)

## Installation

Using npm:

```shell
npm install --save @alpakaio/alpaka-native-useragent
```

> ⚠️ This package has a peer dependency of [React Native Device Info]() at version 2.0.0 or higher.

## Usage

```js
import UserAgent from '@alpakaio/alpaka-native-useragent';
```

## API

| Method                                                            | Return Type         |  iOS | Android | Windows | Since  |
| ----------------------------------------------------------------- | ------------------- | :--: | :-----: | :-----: | ------ |
| [getUserAgentAsync()](#getuseragentasync)                         | `Promise<string>`   |  ✅  |   ✅    |   ✅    | 1.0.0 |

### getUserAgentAsync()

Gets the appropriate user-agent string to use with Alpaka services.

**Examples**

```js
const userAgentString = await UserAgent.getUserAgentAsync(); 
// "Alpaka Punch; 1.0.0; b.17; en-GB; (Apple; iOS; 12.1; Handheld; iPhone(12,1))"
```

```js
UserAgent.getUserAgentAsync().then((userAgentString) => {
    // "Alpaka Punch; 1.0.0; b.17; en-GB; (Apple; iOS; 12.1; Handheld; iPhone(12,1))"
});
```

## Troubleshooting

When installing or using `alpaka-native-useragent`, you may encounter the following problems:

<details>
  <summary>[tests] - Cannot run my test suite when using this library</summary>

`alpaka-native-useragent` relies on `react-native-device-info` which contains native code, and needs to be mocked. Jest Snapshot support may work though.

Here's how to do it with jest for example:

```js
// in your package.json:
"jest": {
  "setupFiles": [
    "./testenv.js"
  ],


// testenv.js:
jest.mock('@alpakaio/alpaka-native-useragent', () => {
  return {
    getUserAgentAsync: jest.fn(),
  };
});
```

</details>

<details>
    <summary>[warnings] - dispatch_sync</summary>
    
Some of the APIs internally used will throw warnings in certain conditions like on tvOS or the iOS emulator. This won't be visible in production but even in development it may be irritating. It is useful to have the warnings because these devices return no state, and that can be surprising, leading to github support issues. The warnings is intended to educate you as a developer. If the warnings are troublesome you may try this in your code to suppress them:
    
```javascript
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Required dispatch_sync to load constants for RNDeviceInfo']);
```
</details>

## Release Notes

See the [CHANGELOG.md](https://github.com/alpakaio/alpaka-native-useragent/blob/master/CHANGELOG.md).

## react-native-dom

This library was made compatible with [react-native-dom](https://github.com/vincentriemer/react-native-dom) and [react-native-web](https://github.com/necolas/react-native-web) by providing an empty polyfill in order to avoid breaking builds.
