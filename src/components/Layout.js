import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "bootstrap/scss/bootstrap.scss"
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
