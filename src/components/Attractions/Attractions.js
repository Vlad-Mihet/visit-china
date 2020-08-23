import React from "react"
import Card from "./Card/Card"
import attractionStyles from "./attractions.module.scss"
import Link from "gatsby-link"

export default function Attractions() {
  return (
    <div className={attractionStyles.container}>
      <section>
        <div className={attractionStyles.headerWrapper}>
          <h2>THINGS TO DO &</h2>
          <h2>ATTRACTIONS</h2>
        </div>
        <div className={attractionStyles.deck}>
          <Card title="Guided Tours around Zhangjiajie" num={1} />
          <Card title="Zhangjiajie National Forest Park" num={2} />
          <Card title="Yellow Dragon Cave" num={3} />
          <Card title="Huangshi Village" num={4} />
          <Card title="The Great Canyon of Zhangjiajie" num={5} />
        </div>

        <div className={attractionStyles.nextPage}>
          <Link to={"/"}>See Bundles</Link>
        </div>
        <hr className={attractionStyles.hr} />
      </section>
    </div>
  )
}
