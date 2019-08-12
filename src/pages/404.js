import React from "react"
import Layout from "../components/Layout"
import styles from "../css/error.module.css"
import { Link } from "gatsby"
import Banner from "../components/Banner"
import SEO from "../components/SEO"

export default function error() {
  return (
    <Layout>
      <SEO title="error" />
      <header className={styles.error}>
        <Banner title="oops it's a dead end">
          <Link to="/" className="btn-white">
            Explore tour
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}
