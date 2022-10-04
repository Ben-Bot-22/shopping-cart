import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Product from './Product'

function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App

/*
INTERACTIVE
- navigation bar: number of items in cart
- product page: view in cart (only if product is in cart)
- shopping cart: number of items in cart
-- up / down
-- input field: manually type
- cart
-- update quantity
-- manually type quantity in input field
-- pay now
-- update total price

- watch testing and build tests
-- Setup tests with React Testing Library

*/
