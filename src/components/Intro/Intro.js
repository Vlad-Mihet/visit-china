import React from "react"
import introStyles from "./intro.module.scss"
import Navbar from "../Navbar/Navbar"
import Link from "gatsby-link"

export default function Intro() {
  return (
    <div className={introStyles.container}>
      <Navbar />
      <section>
        <div className={introStyles.mainHeader}>
          <h2>Tianzi Mountains</h2>
          <h1>CHINA</h1>
          <div className={introStyles.wrapper}>
            <h2>THE WONDERLAND THAT</h2>
            <h2>
              INSPIRED THE <span>AVATAR</span>
            </h2>
          </div>
        </div>
        <div className={introStyles.sideBar}>
          <div className={introStyles.sidebarInfo}>
            <p>
              Tianzi Mountain (Chinese: 天子山) is a mountain located in
              Zhangjiajie in the Hunan Province of China, close to the Suoxi
              Valley in South Central China. The mountain is named after the
              early Ming dynasty's farmer Xiang Dakun of the Tujia ethnic group,
              who led a successful local farmers' revolt and called himself
              "Xiang Wang Tianzi", meaning son of Heaven and is the traditional
              epithet of the Chinese emperor. The highest pillar of Tianzi
              Mountain is Kunlun Peak with an elevation of 1,262.5 meters and
              the lowest pillar is Shilanyu with an elevation of 534 meters.
            </p>
          </div>
          <img src={require("../../assets/compass.png")} />
        </div>
        <div className={introStyles.ambiental1}>
          <hr />
          <span>ALT. 1262 M</span>
          <span>Kunlun</span>
        </div>

        <div className={introStyles.ambiental2}>
          <hr />
          <span>ALT. 534 M</span>
          <span>Shilanyu</span>
        </div>

        <div className={introStyles.nextPage}>
          <Link to={"/"}>More Info</Link>
        </div>
        <hr className={introStyles.hr} />
      </section>
    </div>
  )
}
