# Has Touchbar [![npm version](https://img.shields.io/npm/v/has-touchbar.svg?style=flat-square)](https://www.npmjs.com/package/has-touchbar) [![npm downloads](https://img.shields.io/npm/dm/has-touchbar.svg?style=flat-square)](https://www.npmjs.com/package/has-touchbar)

A small no-dependency module to tell you if the current machine has a physical touchbar or not.

**Note**: This module checks for *real physical* touchbar. Even if you run a touchbar simulator, if your mac does not have a touchbar, it will still return false.

## Installation

```shell
$ yarn add has-touchbar
```

## Usage

```js
const hasTouchbar = require('has-touchbar')

hasTouchbar().then(result => {
    if (result) {
        // this computer has a touchbar
    }
    else {
        // no touchbar here
    }
})
```
