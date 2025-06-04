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




function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// setInterval(()=>{
//     document.querySelector(".box").style.background=getRandomRGBColor();
// },1000);

let a= setTimeout(()=>{
    document.querySelector(".box").style.background=getRandomRGBColor();
},1000);

console.log(a)