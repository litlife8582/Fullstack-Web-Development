let boxes=document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor="red"

let boxes2=document.getElementById("redbox")

boxes2.style.backgroundColor="blue"


document.querySelector(".box").style.backgroundColor="green"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})

console.log(document.getElementsByTagName("div"))