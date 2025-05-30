let A=[1,2,3,4,5]

for(let i=0;i<5;i++){
    console.log(A[i])
}

A.forEach((value,index,arr)=>{
    console.log(value,index,arr)
}) 

let obj={
    a:1,
    b:2,
    c:3
}


for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element);
    }
}

/*1. for (const key in obj)
This is a for...in loop that iterates over all enumerable properties of the obj, including properties inherited from its prototype chain.

2. if (Object.hasOwnProperty.call(obj, key))
This checks whether the property really belongs to the object itself (and not inherited from the prototype).

obj.hasOwnProperty(key) would normally be used, but if obj doesn't inherit from Object.prototype or hasOwnProperty is overridden, it could fail.

Object.hasOwnProperty.call(obj, key) is the safe way to check.

3. const element = obj[key]
This accesses the value stored at the current key.

4. console.log(key, element)
Prints the key and its corresponding value to the console.

*/ 


for(const value of A ){
    console.log(value)
}


let newArr=A.map((e,index,array)=>{
    return e**2;
})
console.log(newArr)

const newArray=A.map(num=>num*num);
console.log(newArray)


const greaterThanSeven=(e)=>{
    if(e>7) return true;
    return false;
}

console.log(newArr.filter(greaterThanSeven))

const mul=(a,b)=>{
    return a*b
}

console.log(newArr.reduce(mul))

console.log(Aerray.from("Mayukh"))