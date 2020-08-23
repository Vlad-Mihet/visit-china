import React, { useState } from "react"
import navStyles from "./navbar.module.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  const [show, showNav] = useState(false)

  const showNavbar = () => {
    console.log(show)
    showNav(!show)
  }

  const navClass = show === true ? navStyles.enter : navStyles.exit

  const listClass = show === true ? navStyles.slideInTop : navStyles.remove

  return (
    <div className={navStyles.container + " " + navClass}>
      <nav id="nav" className={navStyles.nav}>
        <FontAwesomeIcon
          className={navStyles.hamburger}
          icon={show === true ? faTimes : faBars}
          onClick={showNavbar}
        />
      </nav>
      <ul className={navStyles.list + " " + listClass}>
        <li>
          <Link to={"/"}>HOME</Link>
        </li>
        <li>
          <Link to={"/"}>ABOUT</Link>
        </li>
        <li>
          <Link to={"/"}>MY SKILLS</Link>
        </li>
        <li>
          <Link to={"/"}>MY WORK</Link>
        </li>
        <li>
          <Link to={"/"}>CONTACT</Link>
        </li>
      </ul>
    </div>
  )
}
