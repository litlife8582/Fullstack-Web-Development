// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }


async function getData() {
  let x=await fetch('https://jsonplaceholder.typicode.com/todos/1',{
    method:'POST',
    body: JSON.stringify({
      title:'foo',
      body:'bar',
      userIs:'1',
    }),
    headers:{
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  let data=await x.json() 
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    console.log(x)
    return 455
}

fetch('https://example.com/api/data', {
  method: 'POST', // Specify the request method
  headers: {
    'Content-Type': 'application/json' // Set the content type
  },
  body: JSON.stringify({
    name: 'Mayukh',
    age: 21
  }) // Convert the JavaScript object to JSON
})
.then(response => response.json()) // Parse the JSON response
.then(data => {
  console.log('Success:', data); // Handle success
})
.catch(error => {
  console.error('Error:', error); // Handle error
});



async function main(){
console.log("Loading Modules");
console.log("Do something else");
console.log("Load Data");

let data = await getData();
console.log(data);

console.log(data);
console.log("Process Data");
console.log("task 2");
}

main()

// data.then((v) => {
//   console.log(data);
//   console.log("Process Data");
//   console.log("task 2");
// })
