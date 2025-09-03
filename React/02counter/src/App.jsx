import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter]= useState(15)
  
  //let counter=5
  
  const addValue=()=>{
    //counter+=1
    setCounter(counter+1)
    console.log("Clicked: Added Value ",counter)
  }

  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }else{
      alert("Counter Value cannot be negative")
      console.log("Invalid input");
    }
    
    console.log("Clicked: Removed Value",counter)
  }
    
  return (
    <>
      <h1>Chai aur React</h1>
      <h1>Counter value : {counter}</h1>

      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
