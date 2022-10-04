import react from 'react'
import CartQuantity from './CartQuantity'

function CartProduct() {
  return (
    <div className="m-3 flex items-center gap-4">
      <img
        src="/src/assets/cat1.jpg"
        alt="cat"
        className="border-accent h-36 rounded border-2 object-fill"
      ></img>
      <div className="text-accent flex flex-col gap-2 items-center">
        <h1>Sonny</h1>
        <h2>$49.99</h2>
        <CartQuantity />
      </div>
    </div>
  )
}

export default CartProduct
