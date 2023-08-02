import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './page/Login'
import Register from './page/Register'
import Dashboard from './page/Dashboard'
import Navbar from './components/Navbar'

const App = () => {
  return (<>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Login/>} />
        <Route path='/register' element={ <Register/>} />
        <Route path='/dashboard' element={ <Dashboard/>} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App