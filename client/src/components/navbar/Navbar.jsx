import React from 'react'
import { assets } from '../../assets/assets.js'

const Navbar = () => {
  return (
    <div class='Main-div bg-gray-400 h-20 flex justify-between items-center px-3'>
        <div class='Logo flex-1 w-3/4 flex justify-center items-center'>
            <img src={assets.logo} alt="logo" class='h-16 w-50 object-cover'/>
        </div>
        <div class='Day-date'>
            <div class='Day'>Friday</div>
            <div class='Date'>23-01-2026</div>
        </div>
    </div>
  )
}
export default Navbar