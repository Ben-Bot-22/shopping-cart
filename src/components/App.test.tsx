import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // optional
import userEvent from '@testing-library/user-event'
// import TestComponent from 'path-to-test-component'
import App from './App'
import Product from './Product'
import Home from './Home'
import Card from './Card'
import { BrowserRouter } from 'react-router-dom'

/*
TODO:

[] screen test
[] snapshot test

** TESTS **

SHOP
- adding cats to cart; cart has cats
- add to cart adds view in cart button

NAVBAR
- add to cart updates nav bar quantity
- remove from cart update nav bar quantity

CART
- remove button removes item
- quantity updates total price
- Up / down buttons update quantity

*/

const MockHome = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

describe('Add to cart button populates cart screen', () => {
  it('view cart button appears after adding to cart', () => {
    render(<MockHome />)
    const shopNowButton = screen.getByRole('link', { name: /shop now/i })
    userEvent.click(shopNowButton)
    const catButton = screen.getByRole('Card', { name: /Sonny/i })
    userEvent.click(catButton)
    const addToCartButton = screen.getByRole('button', { name: /add to cart/i })
    userEvent.click(addToCartButton)
    const viewCartButton = screen.getByRole('link', { name: /view in cart/i })
    expect(viewCartButton).toBeInTheDocument()
  })
})
