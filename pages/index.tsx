import type { NextPage } from "next"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero />
    </div>
  )
}

export default Home
