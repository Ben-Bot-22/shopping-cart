import { Link } from 'react-router-dom'

function Card({ source, name, price }: Props) {
  return (
    <Link to="/product" state={{ source, name, price }}>
      <div className="bold flex h-80 w-52 flex-col items-center rounded-lg border-4 border-accent bg-accent text-white shadow-black drop-shadow-md hover:border-white">
        <img
          src={source}
          alt={name}
          className="h-64 w-52 rounded-t object-fill"
        ></img>
        <h1>{name}</h1>
        <h2>{price}</h2>
      </div>
    </Link>
  )
}

type Props = {
  source: string
  name: string
  price: string
}

export default Card
