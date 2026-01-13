import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Sorting from './Pages/Sorting'
import Footer from './Components/Footer'
import Graph from './Pages/Graph'
import Description from './Pages/Description'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sorting' element={<Sorting/>}/>
        <Route path='/graph'  element={<Graph/>}/>
        <Route path="/detail/:type/:algo" element={<Description/>} />

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
