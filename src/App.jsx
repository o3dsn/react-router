import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './view/About'
import Home from './view/Home'
import Contacts from './view/Contacts'
import Products from './view/Products'
import Layout from './view/Layout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/products' element={<Products />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
