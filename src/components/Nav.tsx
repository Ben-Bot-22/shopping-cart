import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="flex">
      <ul className="list-disc bold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
