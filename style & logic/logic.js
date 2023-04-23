let textareainp=document.querySelector(".userinputtext");
// upper
let Uppercase=document.querySelector(".Uppercase");
Uppercase.addEventListener("click",()=>{
    textareainp.value=textareainp.value.toUpperCase()
})
// lower
let lowercase=document.querySelector(".lowercase");
lowercase.addEventListener("click",()=>{
    textareainp.value=textareainp.value.toLowerCase()
})
// word count
let wordcount=document.querySelector(".countno");
textareainp.addEventListener("input",()=>{
    wordcount.innerHTML=textareainp.value.trim().split(" ").length
})

