import React from 'react'
import { NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
    <nav className="bg-black pt-8 pb-5 text-white flex space-x-32 pl-3 pr-3 justify-between text-lg">
    <NavLink to="/" className={({ isActive }) => isActive ? "hover:underline underline" : "hover:underline"}>
                Home
    </NavLink> 
    <NavLink to="/about" className={({ isActive }) => isActive ? "hover:underline underline" : "hover:underline"}>
                About
    </NavLink>
    <NavLink to="/contact" className={({ isActive }) => isActive ? "hover:underline underline" : "hover:underline"}>
                Contact
    </NavLink>
    </nav>
    </div>
  )
}

export default Navbar
