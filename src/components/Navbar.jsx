import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-around bg-violet-400">
            <div className="logo m-2 font-bold text-xl">
                <span>TaskManager</span>
            </div>
            <ul className="flex gap-6 m-2">
                <li className="cursor-pointer hover:font-bold transition-all">Home</li>
                <li className="cursor-pointer hover:font-bold transition-all">Your Tasks</li>
            </ul>
        </nav>
    )
}

export default Navbar
