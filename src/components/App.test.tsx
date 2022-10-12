import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom' // optional
import userEvent from '@testing-library/user-event'
import App from './App'
import Product from './Product'
import Home from './Home'
import Card from './Card'
import { BrowserRouter, Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

/*
TODO:

** TESTS **

Add to cart button works

SHOP
- add to cart adds view in cart button
- adding cats to cart; cart has cats

NAVBAR
- add to cart updates nav bar quantity
- remove from cart update nav bar quantity

CART
- remove button removes item
- quantity updates total price
- Up / down buttons update quantity

*/

const MockApp = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

describe('Add to cart button populates cart screen', () => {
  it('renders shop now button', async () => {
    render(<MockApp />)
    const shopNowButton = screen.getByRole('link', { name: /Shop Now/i })
    expect(shopNowButton).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const snap = render(<MockApp />)
    expect(snap).toMatchSnapshot()
  })
  // it('renders view in cart button', async () => {
  //   render(<MockApp />)
  //   const shopNowButton = screen.getByRole('link', { name: /Shop Now/i })
  //   userEvent.click(shopNowButton)
  //   screen.debug()
  //   const addToCartButton = screen.getByRole('button', { name: /Add to Cart/i })
  //   userEvent.click(addToCartButton)
  //   const viewCartButton = screen.getByRole('button', { name: /View in Cart/i })
  //   expect(viewCartButton).toBeInTheDocument()
  // })
})
