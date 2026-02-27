import React from 'react'
import Section1 from './component/section 1/Section1'
import Section2 from './component/section2/section2'

const App = () => {
  const User = [
    {
      img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW4lMjBhdCUyMHdvcmt8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Satisfied',
      color:'blue'
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWFuJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww',
      intro:'',
      tag:'UnderServed',
      color:'pink'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1722349512829-af804401baf0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdvbWFuJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww',
      intro:'',
      tag:'Underbanked',
      color:'lightgreen'
    },
    {
      img:'https://images.unsplash.com/photo-1747953273904-e46e522906c9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Underwear',
      color:'lightpink'
    },
    {
      img:'https://images.unsplash.com/photo-1643581932374-ba6fe76924b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdCUyMHdvbWFuJTIwYXQlMjB3b3JrfGVufDB8fDB8fHww',
      intro:'',
      tag:'Undercover',
      color:'lightblue'
    },
    {
      img:'https://images.unsplash.com/photo-1721420372338-470b666fe14d?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Average',
      color:'orange'
    },
  ]
  return (
    <div>
       <Section1 User={User}/>
       <Section2 />
    </div>
  )
}

export default App