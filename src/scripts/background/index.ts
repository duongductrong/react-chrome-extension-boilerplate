/* eslint-disable no-console */

import { browser } from "webextension-polyfill-ts"

browser.runtime.onInstalled.addListener((): void => {
  console.log("🦄", "extension installed")
})

// Please remove default_popup from manifest.json
// And you can enable this code to open to communicate with content
// browser.action.onClicked.addListener((tab) => {
//   const activeTabs = browser.tabs.query({ active: true, currentWindow: true });
//   activeTabs.then((tabs) => {
//     const activeTab = tabs[0];
//     if (activeTab) {
//       browser.tabs.sendMessage(activeTab.id!, { action: "toggle" });
//     }
//   });
// });
