import './App.css'
import Card from './components/card'

function App() {
  let myObj={
    username:"Mayukh",
    age:21
  }

  let newArr=[1,2,3];
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card channel="chai aur code" btnText="Visit Me" obj={myObj} arr={newArr}/>
      <Card channel="Mayukh" btnText="Visit Me"/>
    </>
  )
}

export default App
