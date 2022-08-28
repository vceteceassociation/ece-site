import PEOs from "./PEOs"
import PSOs from "./PSOs"

const Card = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly mb-9 items-center sm:items-start">
      <PEOs />
      <PSOs />
    </div>
  )
}

export default Card
