/* eslint-disable no-console */

import { browser } from "webextension-polyfill-ts"
import "./renderer"

console.log("🦄", "content script loaded")

browser.action.onClicked.addListener(() => {
  console.log("Hello")
})
