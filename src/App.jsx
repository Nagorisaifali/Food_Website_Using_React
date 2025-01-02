import React from 'react'
import Layout from './components/Layout/Layout'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import Pagenotefound from './pages/Pagenotfound'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/menu' element={ <Menu/> }/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/contact' element={ <Contact/> }/>
          <Route path='/pagenotfound' element={ <Pagenotefound/> }/>
          
        </Routes>
      </BrowserRouter>

      
    </div>
  )
}

export default App

