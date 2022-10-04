import react from 'react'
import { useLocation, Link } from 'react-router-dom'

/*
- item page
-- proceed to checkout (if something is in cart)
*/

function Product() {
  const location = useLocation()
  return (
    <div className="mt-4 flex justify-center">
      <div className="border-accent flex h-full items-center justify-between rounded-xl border-4 bg-white">
        <img
          src={location.state.source}
          alt={location.state.text}
          className="border-accent h-5/6 w-80 rounded-l-lg border-r-4 object-fill"
        />
        <div className="border-accent flex flex-col items-center gap-4 p-8">
          <h1 className="text-accent text-2xl font-bold">
            {location.state.text}
          </h1>
          <h1 className="text-accent text-2xl">{location.state.price}</h1>
          <Link
            className="bg-accent text-bold flex h-8 w-44 items-center justify-center rounded-md text-xl text-white"
            to="/cart"
          >
            <span>Add to Cart</span>
          </Link>
          <Link
            className="text-bold text-accent border-accent flex h-8 w-44 items-center justify-center rounded-md border-2 text-xl"
            to="/cart"
          >
            <span>View in Cart</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product
