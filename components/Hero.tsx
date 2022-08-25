const Hero = () => {
  return (
    <div className="hero min-w-full bg-hero mt-4">
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content max-w-md">
        <div className="max-w-md flex flex-col justify-evenly gap-y-6 my-8 md:gap-y-12 md:my-16">
          <h1 className="text-3xl sm:text-5xl font-bold font-head">
            The ECE Association
          </h1>
          <p className="h-20 sm:h-40 font-body">
            The official handle of the Department of ECE @ VCET (Autonomous)
            Madurai.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
