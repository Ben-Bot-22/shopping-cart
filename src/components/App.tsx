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
  const [cartTotal, setCartTotalPrice] = useState(0)

  const updateQuantity = (id: string, quantity: number) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: quantity }
      }
      return item
    })
    setCartItems([...newCartItems])
    calcQuantity(newCartItems)
    calcTotalPrice(newCartItems)
  }

  const calcTotalPrice = (newCartItems: typeof cartItemData) => {
    let total = 0
    newCartItems.forEach((item) => {
      total += item.price * item.quantity
    })
    total = Math.round(total * 100) / 100
    setCartTotalPrice(total)
  }

  const calcQuantity = (newCartItems: typeof cartItemData) => {
    let total = 0
    newCartItems.forEach((item) => {
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
    // check if item already exists in cart
    const itemExists = cartItems.find((item) => item.name === name)
    if (itemExists) {
      // if item exists, update quantity
      updateQuantity(itemExists.id, itemExists.quantity + quantity)
    } else {
      // add new item
      const newCartItems = [
        ...cartItems,
        { id: uuidv4(), name, price, quantity, imageSource: src }
      ]
      setCartItems(newCartItems)
      calcQuantity(newCartItems)
      calcTotalPrice(newCartItems)
    }
  }

  const removeFromCart = (id: string) => {
    // remove from cart
    const newCartItems = cartItems.filter((item) => item.id !== id)
    setCartItems([...newCartItems])
    calcQuantity(newCartItems)
    calcTotalPrice(newCartItems)
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

**React Testing Library**
- snapshot test x2
- screen test x2
- Add to cart update nav bar quantity
- remove from cart update nav bar quantity

*/
