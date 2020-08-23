import React, { useState } from "react"
import cardStyles from "./card.module.scss"

export default function Card(props) {
  const expand = () => {
    console.log("hello!")
  }
  return (
    <div className={cardStyles.card}>
      <img src={require(`../../../assets/Cards/card${props.num}.jpg`)} alt="" />
      <div>
        <h3>{props.title}</h3>
        <span onClick={expand.bind(this)}>See More</span>
      </div>
    </div>
  )
}
