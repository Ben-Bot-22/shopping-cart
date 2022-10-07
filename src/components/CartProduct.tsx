import react from 'react'
import CartQuantity from './CartQuantity'
import {
  cartItemData,
  updateQuantity,
  addNewItem,
  removeFromCart
} from '../utils/types'

type Props = {
  // cartItems: typeof cartItemData
  updateQuantity: updateQuantity
  removeFromCart: removeFromCart
  id: string
  name: string
  price: number
  quantity: number
  src: string
}

function CartProduct({
  updateQuantity,
  removeFromCart,
  id,
  name,
  price,
  quantity,
  src
}: Props) {
  return (
    <div className="m-3 flex items-center gap-4">
      <img
        src={src}
        alt="cat"
        className="h-36 w-28 rounded border-2 border-accent object-fill"
      ></img>
      <div className="flex flex-col items-center gap-2 text-accent">
        <h1>{name}</h1>
        <h2>{price}</h2>
        <CartQuantity
          quantity={quantity}
          removeFromCart={removeFromCart}
          id={id}
        />
      </div>
    </div>
  )
}

export default CartProduct
