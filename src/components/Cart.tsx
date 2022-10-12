import CartProduct from './CartProduct'
import { cartItemData, updateQuantity, removeFromCart } from '../utils/types'

type Props = {
  cartItems: typeof cartItemData
  updateQuantity: updateQuantity
  // addNewItem: addNewItem
  removeFromCart: removeFromCart
  cartTotal: number
}

function Cart({ cartItems, updateQuantity, removeFromCart, cartTotal }: Props) {
  const cartList = cartItems.map((item) => (
    <CartProduct
      key={item.id}
      id={item.id}
      updateQuantity={updateQuantity}
      removeFromCart={removeFromCart}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      src={item.imageSource}
    />
  ))
  const showAlert = () => {
    alert('Thank you shopping at Cat Cart!')
  }
  return (
    <div className="mt-4 flex justify-center">
      <div className="flex w-3/6 flex-col items-center justify-center rounded-lg border-2 border-accent bg-white">
        <h1 className="m-1 flex justify-center text-2xl text-accent">
          <span>Cart</span>
        </h1>
        <div className="flex flex-col">{cartList}</div>
        <hr className="my-1 mx-auto h-0.5 w-48 rounded border-0 bg-accent" />
        {isNaN(cartTotal) || cartTotal === 0 ? (
          <h1 className="m-2 text-xl text-accent">Such empty!</h1>
        ) : (
          <>
            <h1 className="m-2 text-xl text-accent">Total: ${cartTotal}</h1>
            <button
              className="bold m-4 h-8 w-48 rounded bg-accent text-white shadow-md shadow-zinc-400"
              onClick={showAlert}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart
