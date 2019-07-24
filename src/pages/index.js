import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Continue exploring"
        info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, odio?"
      >
        <Link to="/tours" className="btn-white">
          Explore tour
        </Link>
      </Banner>
    </SimpleHero>
  </Layout>
)
