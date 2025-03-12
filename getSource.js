function get_source(documment_body){
    return documment_body.innerText;
}

chrome.runtime.sendMessage(null,{
    action: "getSource",
    source: documment.body.innerHTML
});