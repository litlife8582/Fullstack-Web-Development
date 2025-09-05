import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)

  const[charAllowed,setCharAllowed]=useState(false)
  const[password,setPassword]=useState("")

  //useRef hook
  const passwordRef=useRef(null)

  //Method to generate password
  //useCallback->Optimization or Memoize
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstwvxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-==[]{}~`"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])
  
  //Method to copy password to clipboard
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,10)//defines the range which can be copied
    window.navigator.clipboard.writeText(password)
  },[password])

  //useEffect->Running
  useEffect(()=>{passwordGenerator()},
  [length,numberAllowed,charAllowed])
  return (
    <>
      <div className='w-full max-w-md shadow-md pb-6 pt-2
      rounded-lg px-4 my-8 mx-auto text-center text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center mb-4'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className='bg-amber-50 outline-none w-full py-1 px-3' 
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard} 
          className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink=0
          active:bg-blue-900'>copy</button>
        </div>
        <div className='flex text-sm justify-center gap-x-2'>
          <div className='flex items-center gap-x-2'>
            <input type="range"
             min={6}
             max={100}
             value={length}
             className='cursor-pointer gap-2'
             onChange={(e)=>setLength(e.target.value)}/>
             <label>Length:{length}</label>
             <div>
              <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={()=>
                  {setNumberAllowed((prev)=>!prev)//callback which accesses the previous value and reverses it on clicking the checkbox
                }} />
                <label htmlFor="numberInput">Numbers</label>
              </div>
             </div>

             <div>
              <div className='flex items-center gap-x-1'>
                <input type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={()=>
                  {setCharAllowed((prev)=>!prev)
                }} />
                <label htmlFor="characterInput">Character</label>
              </div>
             </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App