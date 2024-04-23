import { averageFromPage } from "./utils.js";

let calculAverage = document.getElementById("calculAverage");

calculAverage.addEventListener("click", async function () {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log(calculAverage);
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: averageFromPage,
  });
});
