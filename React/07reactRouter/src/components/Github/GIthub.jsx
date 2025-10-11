import React from 'react'
import { useEffect,useState } from "react"

export default function Github() {
    const [data,setData]=useState();
    useEffect(()=>{
        fetch('http://api.github.com/users/litlife8582')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
    <div>
      Github Followers:{data.followers}
    </div>
  )
}