import react from 'react'
import CartProduct from './CartProduct'

function Cart() {
  return (
    <div className="mt-4 flex justify-center">
      <div className="border-accent flex w-3/6 flex-col justify-center rounded-lg border-2 bg-white items-center">
        <h1 className="text-accent m-1 text-2xl flex justify-center">
          <span>Cart</span>
        </h1>
        <div className="flex flex-col">
          <CartProduct />
          <CartProduct />
        </div>
        <h1 className="text-accent m-2 text-xl">Total: $$$</h1>
      </div>
    </div>
  )
}

export default Cart
