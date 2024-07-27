import { browser } from "webextension-polyfill-ts";
import "./renderer";

console.log("🦄", "content script loaded");

browser.action.onClicked.addListener(function (tab) {
  console.log("Hello");
});
