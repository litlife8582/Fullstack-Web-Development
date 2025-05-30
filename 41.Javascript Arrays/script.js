//Array is mutable

let arr=[1,2,3,4,5];

console.log(arr);
console.log(arr.length);
console.log(arr[0]);

console.log(arr.toString())
console.log(arr.join(" and "))
arr.pop()//removes the last element 
console.log(arr)

arr.push(10)
console.log(arr)

arr.shift(40) //remove the first element of an array
console.log(arr)


let arr1=[1,2,3]
let arr2=[4,5,6]
let arr3=[7,8,9]
let a=arr1.concat(arr3,arr2)
console.log(a.sort())
