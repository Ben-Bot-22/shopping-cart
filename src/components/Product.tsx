import { debug } from 'console'
import react from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  cartItemData,
  updateQuantity,
  addNewItem,
  removeFromCart
} from '../utils/types'

type Props = {
  cartItems: typeof cartItemData
  updateQuantity: updateQuantity
  addNewItem: addNewItem
  removeFromCart: removeFromCart
  cartQuantity: number
}

function Product({
  cartItems,
  updateQuantity,
  addNewItem,
  removeFromCart,
  cartQuantity
}: Props) {
  const location = useLocation()
  return (
    <div className="mt-4 flex justify-center">
      <div className="flex h-full items-center justify-between rounded-xl border-4 border-accent bg-white ">
        <img
          src={location.state.source}
          alt={location.state.text}
          className="h-5/6 w-80 rounded-l-lg border-r-4 border-accent object-fill"
        />
        <div className="flex flex-col items-center gap-4 border-accent p-8">
          <h1 className="text-2xl font-bold text-accent">
            {location.state.name}
          </h1>
          <h1 className="text-2xl text-accent">{location.state.price}</h1>
          <button
            className="text-bold flex h-8 w-44 items-center justify-center rounded-md bg-accent text-xl text-white"
            onClick={() =>
              addNewItem(
                location.state.name,
                location.state.price,
                1,
                location.state.source
              )
            }
          >
            <span>Add to Cart</span>
          </button>
          {cartQuantity > 0 && (
            <Link
              className="text-bold flex h-8 w-44 items-center justify-center rounded-md border-2 border-accent text-xl text-accent"
              to="/cart"
            >
              <span>View in Cart</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Product
