console.log("Hey my name is Mayukh")
console.log("Hey my friend is Tamaghna")

setTimeout(() => {
    console.log("This a timeout function")
}, 2000);

console.log("This is the function after the settimeout")

const fn=(a) => {
  console.log(a)

}



const callback =(arg,fn) => {
  console.log(arg)
  fn()
}



const loadScript=(src, callback) => {
  let sc=document.createElement("script");
  sc.src=src;
  sc.onload=callback("Mayukh")
  document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);