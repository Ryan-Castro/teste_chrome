chrome.runtime.onMessage.addListener((request)=>{
    if(request.todo == "changeColor"){
        document.querySelectorAll(".ytd-rich-grid-media").forEach(element=>{
            element.style.color = request.color
        })
    }
})