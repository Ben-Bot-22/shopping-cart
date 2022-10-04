import react from 'react'
import { Link } from 'react-router-dom'

function Card({ source, text, price }: Props) {
  return (
    <Link to="/product" state={{ source, text, price }}>
      <div className="bg-accent bold border-accent flex h-80 w-52 flex-col items-center rounded-lg border-4 text-white shadow-black drop-shadow-md hover:border-white">
        <img
          src={source}
          alt={text}
          className="h-64 w-52 rounded-t object-fill"
        ></img>
        <h1>{text}</h1>
        <h2>{price}</h2>
      </div>
    </Link>
  )
}

type Props = {
  source: string
  text: string
  price: string
}

export default Card
