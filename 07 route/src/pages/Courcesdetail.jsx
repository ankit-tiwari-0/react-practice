import React from 'react'
import { useParams } from 'react-router-dom'

const Courcesdetail = () => {
    const params = useParams()
  return (
    <div>
        <h1 class=" absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px]  font-semibold whitespace-nowrap">{params.id}Courcesdetail</h1>
    </div>
  )
}

export default Courcesdetail