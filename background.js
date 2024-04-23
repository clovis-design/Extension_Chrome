import { averageFromPage } from "./utils.js";

chrome.commands.onCommand.addListener(async function (command) {
  console.log(command);
  switch (command) {
    case "my-command-2":
      let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: averageFromPage,
      });
  }
});
