import type { NextPage } from "next"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import HoDDesk from "../components/HoDDesk"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero />
      <HoDDesk />
      <Card />
    </div>
  )
}

export default Home
