let boxes=document.getElementsByClassName("box")

function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256); 
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

for(let i=0;i<5;i++){
    boxes[i].style.backgroundColor=getRandomRGBColor();
}