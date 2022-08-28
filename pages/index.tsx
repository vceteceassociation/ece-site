import type { NextPage } from "next"
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import HoDDesk from "../components/HoDDesk"
import Outcomes from "../components/Outcomes"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Hero />
      <HoDDesk />
      <Card />
      <Outcomes />
      <Footer />
    </div>
  )
}

export default Home
