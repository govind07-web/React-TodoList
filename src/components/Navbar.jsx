import React from 'react'
import itask from '../assets/itask.jpg'

const Navbar = () => {
    return (
        <nav className="flex justify-around items-center bg-violet-700">
            <div className="logo m-2 font-bold text-xl flex gap-2 bg-gray-200 p-1 rounded-sm">
                <img src={itask} alt="logo" width={33}  />
                <span>iTaskManager</span>
            </div>
            <ul className="flex gap-6 m-2">
                <li className="cursor-pointer font-medium hover:font-bold transition-all">Home</li>
                <li className="cursor-pointer font-medium hover:font-bold transition-all">Your Tasks</li>
            </ul>
        </nav>
    )
}

export default Navbar
