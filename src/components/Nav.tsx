import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="flex h-12 items-center justify-between pr-6 text-2xl font-bold bg-first">
      <Link
        className="text-white justify-self-start pl-6 hover:underline"
        to="/"
      >
        Home
      </Link>
      <ul className="text-white flex space-x-10">
        {/* <li className="list-none"></li> */}
        <li className="list-none hover:underline">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="hover:underline">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
