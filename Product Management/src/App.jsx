import React from 'react'
import Navbar from './components/Navbar'
import Addproduct from './components/Addproduct'
import Home from './components/Home'
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      {/* <Addproduct/>
      <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/add' element={<Addproduct/>}></Route>
    </Routes>
    </div>
  )
}

export default App
