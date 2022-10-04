import react from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <img
          src="/src/assets/catHero.jpg"
          alt="cat walking next to bay"
          className="w-px-600 border-first h-auto border-4"
        ></img>
        <Link
          to="/shop"
          className="bg-accent absolute top-[50%] flex h-11 w-40 items-center justify-center rounded-3xl border-4 text-xl text-white"
        >
          <div>Shop Now</div>
        </Link>
      </div>
    </>
  )
}

export default Home
