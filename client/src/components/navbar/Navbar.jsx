import React, { useState } from 'react'
import { assets } from '../../assets/assets.js'

const Navbar = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div class='Main-div bg-gray-400 h-20 flex justify-between items-center px-3'>
        <div class='Logo flex-1 w-3/4 flex justify-center items-center'>
            <img src={assets.logo} alt="logo" class='h-16 w-50 object-cover'/>
        </div>
        <div class='Day-date flex flex-col items-center'>
            <div class='Day'>
              <p>{currentDate.toLocaleString("en-US", {
                weekday: "long",
                })}
              </p>
            </div>
            <div class='Date'>
              <p>{currentDate.toLocaleString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
                })}
              </p>
            </div>
        </div>
    </div>
  )
}
export default Navbar