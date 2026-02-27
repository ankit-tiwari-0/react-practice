import React from 'react'
import Nav from './nav'
import Center from './center'

const Section1 = (props) => {
  return (
    <div  className='h-screen w-full '>
     <Nav />
     <Center User={props.User} />
    </div>
  )
}

export default Section1