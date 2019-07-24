import React from "react"
// import "./Navbar.scss"
import styles from "./navbar.module.scss"
console.log(styles)

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>I'am Navbar</h1>
    </div>
  )
}

export default Navbar
