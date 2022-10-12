import { Link } from 'react-router-dom'

type Props = {
  source: string
  name: string
  price: number
}

function Card({ source, name, price }: Props) {
  return (
    <Link to="/product" state={{ source, name, price }}>
      <div className="bold flex h-80 w-52 flex-col items-center rounded-lg border-4 border-accent bg-accent text-white shadow-lg shadow-zinc-500 hover:border-white">
        <img
          src={source}
          alt={name}
          className="h-64 w-52 rounded-t object-fill"
        ></img>
        <h1>{name}</h1>
        <h2>${price}</h2>
      </div>
    </Link>
  )
}

export default Card
