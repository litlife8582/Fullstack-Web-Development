import {useState,useEffect} from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [content, setContent] = useState([])

  useEffect(()=>{
    axios.get('/api/content')
    .then((response)=>{
      setContent(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
      <h1>Frontend Page</h1>
      <p>Number of Contents: {content.length}</p>

      {
        content.map((item,index)=>(
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.material}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
