document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#inputSubmit').addEventListener('click', ()=>{
        let color = document.querySelector('#inputColor').value
        chrome.tabs.query({active:true,currentWindow:true}, (tabs)=>{
            chrome.tabs.sendMessage(tabs[0].id, {todo:"changeColor", color})
        })
    })
})