import Mission from "./Mission"
import Vision from "./Vision"

const Card = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly mb-6">
      <Vision />
      <Mission />
    </div>
  )
}

export default Card
