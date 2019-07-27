import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Images from "../examples/Images"

const blog = () => {
  return (
    <Layout>
      helo this is from blog <Link to="/">Back to index</Link>
      <Images></Images>
    </Layout>
  )
}

export default blog
