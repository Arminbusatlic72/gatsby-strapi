import React from "react"
import { graphql } from "gatsby"
import {GatsbyImage} from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import Seo from "../components/seo"
const BlogTemplate = ({ data }) => (
  <Layout>
      <Seo  title={data.strapiBlog.title}/>
      <section className="blog-section">
          <div className="container">
              <h6>{data.strapiBlog.sub_title}</h6>
    <h2 className="blog-section__heading">{data.strapiBlog.title}</h2>
    
    <GatsbyImage
           className="img"
            image={data.strapiBlog.image.childImageSharp.gatsbyImageData}
            quality={95}
            layout="fullWidth"
             formats={["AUTO", "WEBP", "AVIF"]}
            alt="header featured image"
            style={{ marginBottom: `1.45rem` }}
      />
    <p>{data.strapiBlog.content}</p>
    </div>
    </section>
  </Layout>
)
export default BlogTemplate
export const query = graphql`
  query BlogTemplate($id: String!) {
    strapiBlog(id: { eq: $id }) {
        content
        sub_title
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
    }
  }
`