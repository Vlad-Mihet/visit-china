import React from "react"
import Intro from "../components/Intro/Intro"
import Info from "../components/Info/Info"
import Attractions from "../components/Attractions/Attractions"
import "../styles/index.module.scss"

export default function Home() {
  return (
    <div>
      <Intro />
      <Info />
      <Attractions />
    </div>
  )
}
