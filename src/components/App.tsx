import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Product from './Product'
import { v4 as uuidv4 } from 'uuid'
import { cartItemData } from '../utils/types'

function App() {
  const [cartItems, setCartItems] = useState([] as typeof cartItemData)
  const [cartQuantity, setCartQuantity] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  const updateQuantity = (id: string, quantity: number) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: quantity }
      }
      return item
    })
    setCartItems(newCartItems)
    calcQuantity()
    calcTotal()
  }

  const calcTotal = () => {
    let total = 0
    cartItems.forEach((item) => {
      total += item.price * item.quantity
    })
    setCartTotal(total)
  }

  const calcQuantity = () => {
    let total = 0
    cartItems.forEach((item) => {
      total += item.quantity
    })
    setCartQuantity(total)
  }

  const addNewItem = (
    name: string,
    price: number,
    quantity: number,
    src: string
  ) => {
    // find if item is already in cart
    const newCartItems = [
      ...cartItems,
      { id: uuidv4(), name, price, quantity, imageSource: src }
    ]
    const itemInCart = cartItems.find((item) => item.name === name)
    if (itemInCart) {
      updateQuantity(itemInCart.id, itemInCart.quantity + quantity)
      return
    }
    setCartItems(newCartItems)
    calcQuantity()
    calcTotal()
  }

  const removeFromCart = (id: string) => {
    // remove from cart
    setCartItems(cartItems.filter((item) => item.id !== id))
    calcQuantity()
    calcTotal()
  }

  return (
    <div>
      <Nav cartQuantity={cartQuantity} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              addNewItem={addNewItem}
              removeFromCart={removeFromCart}
              cartTotal={cartTotal}
            />
          }
        />
        <Route
          path="/product"
          element={
            <Product
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              addNewItem={addNewItem}
              removeFromCart={removeFromCart}
              cartQuantity={cartQuantity}
            />
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App

/*

**CART PAGE**

Fix nav bar (qty in cart)
- shows (1) when item removed
- after pressing Add to cart, qty in cart doesn't update

- update quantity: up / down
- manually type quantity in input field

- pay now button (if cart is not empty)

**TESTING**

Unit test
- item: quantity up / down
- item: remove

- Setup tests with React Testing Library
-- snapshot
-- screen
*/
