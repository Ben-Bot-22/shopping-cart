import react from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <img
          src="/src/assets/catHero.jpg"
          alt="cat walking next to bay"
          className="w-px-600 h-auto border-4 border-first"
        ></img>
        <Link
          to="/shop"
          className="absolute top-[50%] flex h-11 w-40 items-center justify-center rounded-3xl border-4 bg-accent text-xl text-white"
          data-testid="shop-button"
        >
          <div>Shop Now</div>
        </Link>
      </div>
    </>
  )
}

export default Home
