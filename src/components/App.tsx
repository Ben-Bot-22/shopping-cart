import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Product from './Product'
import { v4 as uuidv4 } from 'uuid'
import { cartItemData } from '../utils/types'

// // function addToCart(
// //   id: string,
// //   name: string,
// //   price: number,
// //   quantity: number,
// //   src: string
// // ): void {
// //   // find item
// //   const item = cartItems.find((item) => item.id === id)
// //   // if entry exists, update quantity
// //   if (item) {
// //     // update quantity
// //     updateQuantity(id, item.quantity + quantity)
// //   } else {
// //     // else, add entry
// //     addNewItem(name, price, quantity, src)
// //   }
// // }

function App() {
  const [cartItems, setCartItems] = useState(cartItemData)

  const updateQuantity = (id: string, quantity: number) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: quantity }
      }
      return item
    })
    setCartItems(newCartItems)
  }

  const addNewItem = (
    name: string,
    price: number,
    quantity: number,
    src: string
  ) => {
    const newCartItems = [
      ...cartItems,
      { id: uuidv4(), name, price, quantity, imageSource: src }
    ]
    setCartItems(newCartItems)
  }

  const removeFromCart = (id: string) => {
    // remove from cart
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  return (
    <div>
      <Nav />
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
git hub commit
Fix mismatch tailwind ordering in config

INTERACTIVE

- shopping cart: number of items in cart
-- up / down
-- input field: manually type

- navigation bar: number of items in cart

- cart
-- update quantity
-- manually type quantity in input field
-- pay now
-- update total price

- product page: view in cart (only if product is in cart)

TESTING
Unit test
- item: quantity up / down
- item: remove

- Setup tests with React Testing Library
-- snapshot
-- screen
*/
