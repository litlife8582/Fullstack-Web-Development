document.querySelector(".container").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("The container was clicked")
})

document.querySelector(".child-container").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("The child-container was clicked")
})

document.querySelector(".child").addEventListener("click",(e)=>{
    e.stopPropagation()
    alert("The child was clicked")
})