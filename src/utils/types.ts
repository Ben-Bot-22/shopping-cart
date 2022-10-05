import { v4 as uuidv4 } from 'uuid'

export const cartItemData = [
  {
    id: uuidv4(),
    name: '',
    price: 0,
    quantity: 0,
    imageSource: ''
  }
]

export type updateQuantity = (id: string, quantity: number) => void

export type addNewItem = (
  name: string,
  price: number,
  quantity: number,
  src: string
) => void

export type removeFromCart = (id: string) => void
