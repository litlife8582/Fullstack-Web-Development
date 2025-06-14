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
