import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  cartQuantity: number
}

function Nav({ cartQuantity }: Props) {
  const newLocal = 'text-white justify-self-start pl-6 hover:underline'
  return (
    <nav className="flex h-12 items-center justify-between bg-first pr-6 text-2xl font-bold">
      <Link className={newLocal} to="/">
        Home
      </Link>
      <ul className="flex space-x-10 text-white">
        {/* <li className="list-none"></li> */}
        <li className="list-none hover:underline">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="hover:underline">
          <Link to="/cart">
            Cart {cartQuantity > 0 && <span>({cartQuantity})</span>}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
