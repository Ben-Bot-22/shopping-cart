import react from 'react'

function CartQuantity() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-1">
        <button className="border-2 border-accent text-accent rounded-full w-6 h-6">
          -
        </button>
        <input
          className="border-accent w-12 rounded border-2"
          type="number"
        ></input>
        <button className="bg-accent text-white rounded-full w-6 h-6">+</button>
      </div>
      <button className="text-sm">remove</button>
    </div>
  )
}

export default CartQuantity
