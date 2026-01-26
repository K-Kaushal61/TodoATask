import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <>
    <Toaster/>
    <Navbar/>
    <Home/>
    </>
  )
}

export default App