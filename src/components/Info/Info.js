import React from "react"
import infoStyles from "./info.module.scss"
import Link from "gatsby-link"

export default function Info() {
  return (
    <div className={infoStyles.container}>
      <section>
        <div className={infoStyles.headerWrapper}>
          <h2>MORE INFO ABOUT</h2>
          <h2>THE TIANZI MOUNTAIN</h2>
        </div>
        <div className={infoStyles.wrapper1}>
          <h3>Brief introduction to Tianzi Mountain Nature Reserve</h3>
          <p>
            Located in the northwest of Wulingyuan Scenic Area, Tianzi Mountain
            makes up a ''golden triangle'' along with Zhangjiajie Forest Park
            and Suoxiyu Valley. The range undulates 40 kilometers and covers an
            area of 5400 hectares. The main peak of Tianzi Mountain dwarfs
            others and rises 1262.5 meters above sea level. What makes the
            distinct contrast is the Si Nan Yu, which is only 534 meters above
            sea level. Thanks to the advent of cable car, we are able to admire
            its fairy-tale landscape with the minimum effort. Besides, Tianzi
            Mountain provides us with some 100 natural viewing platforms.
          </p>
        </div>
        <div className={infoStyles.wrapper2}>
          <h3>King Xiang and Tianzi Moutain</h3>
          <p>
            The Tianzi Mountain was named as ''Qing Yan Mountain'' before Ming
            Dynasty (1368-1644) for green stones. It was not until the year of
            1353 when Xiang Dakun, the leader of Tujia ethnic group, started a
            revolt, established kindom on Tianzi Mountain, and called himself
            ''King Xiang'' - son of heaven. In the year of 1385, they
            encountered the fierce siege of ten thousand soldiers commanded by
            Emperor Zhu Yuanzhang (1328-1398), the first emperor of Ming
            Dynasty. Unfortunately, King Xiang died in the battle and fell into
            the Shentang Gulf. To show their respect and support to Xiang Dakun,
            people set up villages along the Tianzi Mountain. The mounatin was
            renamed as ''Tianzi Mountain''.
          </p>
        </div>
        <div className={infoStyles.nextPage}>
          <Link to={"/"}>Close Attractions</Link>
        </div>
        <hr className={infoStyles.hr} />
      </section>
    </div>
  )
}
