import React, { useState } from "react"
import { Link } from "gatsby"
import { MdMenu } from "react-icons/md"
import styles from "../css/navbar.module.css"
import links from "../constants/links"
import socialIcon from "../constants/social-icons"
import logo from "../images/logo.svg"

const Navbar = () => {
  const [isOpen, satNav] = useState(false)
  const toggleNav = () => {
    satNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.Navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroad logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <MdMenu className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcon.map((item, index) => {
            return (
              <a key={index} href={item.url} target="_blank">
                {item.icon}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
