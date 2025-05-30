const prompt = require('prompt-sync')({ sigint: true });

let n=prompt("Enter the number")
parseInt(n)

let array=[]
for(let i=0;i<n;i++){
    array[i]=i+1;
}

const fac=(a,b)=>{
    return a*b;
}

console.log(array.reduce(fac))