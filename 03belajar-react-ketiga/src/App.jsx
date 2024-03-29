import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Page404 from './pages/Page404'
import User from './pages/User'
import AddUser from './components/User/AddUser'
import EditUser from './components/User/EditUser'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        {/* user */}
        <Route path='users' element={<User />} />
        <Route path='users/add' element={<AddUser />} />
        <Route path='users/edit/:id' element={<EditUser />} />
        <Route path='*' element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default App
