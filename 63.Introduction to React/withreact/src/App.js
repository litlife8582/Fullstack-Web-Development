import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar';

function App() {
  const [value,setvalue]=useState(0)
  return (
    <div className="App">
      <Navbar logoText="Mayukh"/>
      <div className="value">{value}</div>
        <button onClick={()=>{setvalue(value+1)}}>Click Me!</button>
      </div>
  );
}

export default App;
