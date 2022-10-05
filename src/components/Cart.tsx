import react from 'react'
import CartProduct from './CartProduct'
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
}

function Cart({
  cartItems,
  updateQuantity,
  addNewItem,
  removeFromCart
}: Props) {
  return (
    <div className="mt-4 flex justify-center">
      <div className="flex w-3/6 flex-col items-center justify-center rounded-lg border-2 border-accent bg-white">
        <h1 className="m-1 flex justify-center text-2xl text-accent">
          <span>Cart</span>
        </h1>
        <div className="flex flex-col">
          <CartProduct />
          <CartProduct />
        </div>
        <h1 className="m-2 text-xl text-accent">Total: $$$</h1>
      </div>
    </div>
  )
}

export default Cart
