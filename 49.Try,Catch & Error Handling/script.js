let a = prompt("Enter the first number");
let b = prompt("Enter th e second number");

if (isNaN(a) || isNaN(b)) {
  throw SyntaxError("Sorry invalid input");
}

// try {
//   console.log("The sum is= ", parseInt(a) + parseInt(b))*x;
// } catch (error) {
//   console.log("Error has occured");
// }finally{
//     console.log("Files are being closed")
// }

function main() {
  try {
    console.log("The sum is= ", parseInt(a) + parseInt(b)) * x;
    return true;
  } catch (error) {
    console.log("Error has occured");
    return false;
  } finally { //runs even afte rthe execution of the return statement
    console.log("Files are being closed");
  }
}

let c= main()