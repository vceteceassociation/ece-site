const Hero = () => {
  return (
    <div className="hero min-w-full bg-hero mt-4">
      <div className="hero-overlay bg-opacity-60" />
      <div className="hero-content text-center text-neutral-content max-w-md">
        <div className="max-w-md flex flex-col justify-evenly gap-y-12 my-16">
          <h1 className="text-5xl font-bold">The ECE Association</h1>
          <p className="h-40">
            The official handle of the Department of Electronics and
            Communication Engineering of VCET (Autonomous) Madurai.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
