async function getActiveTab() {
    let queryOption = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOption);
    return tab;
}

chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.action === "getSource") {
        console.log("페이지 내용:", document.body.innerHTML);
        document.body.innerHTML = request.source;
    }
});

function popup_dom() {
    return document;
}

async function injectScriptIntoActiveTab() {
    let activeTab = await getActiveTab();
    console.log("현재 탭 ID:", activeTab.id);

    chrome.scripting.executeScript({
        target: { tabId: activeTab.id, allFrames: true },
        files: ["getSource.js"],
    })
    .then((result) => {
        console.log("스크립트 실행 성공", result);
    })
    .catch((err) => {
        console.log("스크립트 실행 실패", err);
    });
}

injectScriptIntoActiveTab();
