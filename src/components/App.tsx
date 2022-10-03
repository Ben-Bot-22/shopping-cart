import { Routes, Route } from 'react-router-dom'
import Nav from './Nav'

function App() {
  return (
    <div className="">
      <Nav />
      <Routes>
        <Route path="/" />
        <Route />
      </Routes>
    </div>
  )
}

export default App

/*
nav up top

Build out static components
- watch react router & get router working
- watch testing and build tests

- home page
-- Hero
-- Title
-- Nav bar
-- Shop link button

- shop page
-- cards
-- cat images
-- Price

- item page
-- image
-- price
-- add to cart
-- proceed to checkout

- shopping cart page
-- list of items (cards, image, price, quantity)
-- quantity: 
--- up / down
--- input field: manually type
-- proceed to payment
-- back to shop

- navigation bar
-- number of items in cart

- Setup tests with React Testing Library
*/
