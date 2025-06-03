let button=document.getElementById("btn")

button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML=`<b> Hey you were clicked </b> Enjoy your click`
})

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML=`How are you?  `
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode)
    document.querySelector(".box").innerHTML=`How are you?  `
})