import React from 'react'
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="h-[12vh] bg-gray-800 py-4 flex items-center justify-between px-8">
        <h1 className="text-white text-3xl">Logo</h1>

        <ul className="text-white flex items-center gap-4 text-lg">
            <li className="">
                <Link to="/">Home</Link>
            </li>
            <li className="">
                <Link to="/about">About</Link>
            </li>
            <li className="">
                <Link to="/play">Play</Link>
            </li>
        </ul>
    </nav>
  
  )
}
