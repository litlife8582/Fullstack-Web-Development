import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {jsx as _jsx} from "react/jsx-runtime.js"

function MyApp(){
  return(
    <div>
      <h1>Custom App !!</h1>
    </div>
  )
}

// const reactElement = {

//     type:'a',
//     props:{
//         href:'http://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit Google'

// }

// ^ was my custom render but to use react we have to render according to the necessities of react

const anotherElement=(
  <a href="http://google.com" target='_blank'>
    Visit Error
  </a>
)//A random object which can be rendered directly without tags

const anotherUser="chai air react"

const reactElement=React.createElement(
  'a',
  {href:'href://google.com', target:'_blank'},
  'click me to visit google',
  anotherUser//evaluated expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
    /*<>
    <App/>
    </>*/

    //anotherElement
    // MyApp()
)
