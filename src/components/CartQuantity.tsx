import react from 'react'
import { removeFromCart } from '../utils/types'

type Props = {
  quantity: number
  removeFromCart: removeFromCart
  id: string
}

function CartQuantity({ quantity, removeFromCart, id }: Props) {
  const newLocal = 'border-accent w-12 rounded border-2 text-center'
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-1">
        <button className="h-6 w-6 rounded-full border-2 border-accent text-accent">
          -
        </button>
        <input
          className={newLocal}
          type="number"
          defaultValue={quantity}
        ></input>
        <button className="h-6 w-6 rounded-full bg-accent text-white">+</button>
      </div>
      <button
        className="text-sm hover:underline"
        onClick={() => removeFromCart(id)}
      >
        remove
      </button>
    </div>
  )
}

export default CartQuantity
