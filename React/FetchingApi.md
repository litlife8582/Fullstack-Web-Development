To fetch an api use use useState and useEffect

We start by:
import {useEffect, useState} from "react"

Then we define a function where use will use fetch the api:

function Name(parameter){
    
}

Inside the function
    1. const [data, setData] = useState({})....... data is a state variable which is initialized using the useState hook. {} is a empty object use to initialize the data. 
    
    The useState hook always returns an array with exactly two items:
        (a)The State Variable (data): This is the variable that holds the current value of your state. Its initial value is {}. You should treat this variable as read-only.
        
        (b)The Setter Function (setData): This is the function you must use to update the state. When you call setData with a new value, React does two things:
            1.It updates the value of data for the next render.
            2.It triggers a re-render of the component so the user interface can reflect the new data.

    2.useEffect(() => {
        fetch(`api url...`)
        .then(response =>   response.json()) .......checks for response
        .then(data => {setData(data)}) ......sets the new data ad re-renders
    }, [])
    console.log(data);