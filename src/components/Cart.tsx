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
  cartTotal: number
}

function Cart({
  cartItems,
  updateQuantity,
  addNewItem,
  removeFromCart,
  cartTotal
}: Props) {
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
  return (
    <div className="mt-4 flex justify-center">
      <div className="flex w-3/6 flex-col items-center justify-center rounded-lg border-2 border-accent bg-white">
        <h1 className="m-1 flex justify-center text-2xl text-accent">
          <span>Cart</span>
        </h1>
        <div className="flex flex-col">{cartList}</div>
        {isNaN(cartTotal) || cartTotal === 0 ? (
          <h1 className="m-2 text-xl text-accent">Such empty!</h1>
        ) : (
          <h1 className="m-2 text-xl text-accent">Total: ${cartTotal}</h1>
        )}
      </div>
    </div>
  )
}

export default Cart
