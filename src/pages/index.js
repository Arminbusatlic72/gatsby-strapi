import * as React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import Counter from "../components/counters/Counter"
import SEO from "../components/seo"

const IndexPage = () => (
  
  <Layout>
    <SEO title="Home" />
    <Hero />
    <About />
    <Counter />
   
    
  </Layout>
)

export default IndexPage
