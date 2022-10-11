import react from 'react'
import { removeFromCart, updateQuantity } from '../utils/types'

type Props = {
  id: string
  quantity: number
  removeFromCart: removeFromCart
  updateQuantity: updateQuantity
}

function CartQuantity({ id, quantity, removeFromCart, updateQuantity }: Props) {
  const newLocal = 'border-accent w-12 rounded border-2 text-center'
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-1">
        {quantity === 0 ? (
          <button
            className="h-6 w-6 rounded-full bg-accent text-white opacity-40"
            onClick={() => updateQuantity(id, quantity - 1)}
            disabled
          >
            -
          </button>
        ) : (
          <button
            className="h-6 w-6 rounded-full bg-accent text-white"
            onClick={() => updateQuantity(id, quantity - 1)}
          >
            -
          </button>
        )}
        <input
          className={newLocal}
          type="number"
          value={quantity}
          onChange={(e) => updateQuantity(id, Number(e.target.value))}
        ></input>
        <button
          className="h-6 w-6 rounded-full bg-accent text-white"
          onClick={() => updateQuantity(id, quantity + 1)}
        >
          +
        </button>
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
