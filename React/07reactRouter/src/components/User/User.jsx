import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { userId }=useParams()
  return (
    <div className="bg-orange-500 p-4 align-middle text-3xl">
        User:{ userId }
    </div>
  )
}


