import Image from "next/image"

const Card = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl mt-16 min-w-screen">
      <div className="card-body">
        <h2 className="card-title text-2xl">The ECE Association</h2>
        <p> We are more than a department in VCET. Learn and Grow with us! </p>
      </div>
      <figure>
        <Image src="/ECE-Hero-min.jpeg" width="500" height="300" />
      </figure>
    </div>
  )
}

export default Card
