import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userId}= useParams();
  return (
    <div className='bg-green-700 px-5 py-5 text-black'>User:{userId}</div>
  )
}

export default User