import Card from './Card'

function Shop() {
  return (
    <div className="mt-4 flex justify-center">
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card source="/src/assets/cat1.jpg" name="Sonny" price={49.99} />
        <Card source="/src/assets/cat2.jpg" name="Mittens" price={49.99} />
        <Card source="/src/assets/cat3.jpg" name="Grommet" price={49.99} />
        <Card source="/src/assets/cat4.jpg" name="Sushi" price={49.99} />
        <Card source="/src/assets/cat5.jpg" name="Pickles" price={49.99} />
      </div>
    </div>
  )
}

export default Shop
