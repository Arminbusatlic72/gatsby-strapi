import * as React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout/Layout"
import Hero from "../components/hero/Hero"
import About from "../components/about/About"
import CounterSection from "../components/counters/CounterSection"
import Seo from "../components/seo"

const IndexPage = ({data}) => {
  
  
  return(
   <Layout>
    <Seo title="Home" />
    <Hero />
    
    <About aboutData={data.allStrapiIndexPage.edges[0].node} />
    <CounterSection /> 
  </Layout>
)}
export const query = graphql`
  query indexPageQuery {
    allStrapiIndexPage {
      edges {
        node {
          Header {
            heading
            video {
              url
            }
          }
          about {
            about_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            about_image1 {
              childImageSharp {
                gatsbyImageData
              }
            }
            heading
            paragraph1
            paragraph2
            paragraph3
            paragraph4
          }
        }
      }
    }
  }
`
export default IndexPage
