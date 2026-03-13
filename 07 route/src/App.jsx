import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Nav from './compo/Nav'
import Footer from './compo/Footer'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <div className='h-screen bg-black text-taupe-50'>
      <Nav />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />}>
            <Route path='men' element={<Men />} />
            <Route path='women' element={<Women />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App