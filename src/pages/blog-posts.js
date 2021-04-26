import React from 'react'
import { Link, graphql } from "gatsby"
import {GatsbyImage } from "gatsby-plugin-image"
import Layout from '../components/layout/Layout'
import Seo from "../components/seo"


const BlogPostsPage = ({data}) => {
    
    
    return(
        <Layout>
          <Seo title="Blog Posts" />
          <section className="blog-posts-section">
          <div className="container">
            <h2 className="blog-posts-section__heading">Blog Posts</h2>
    
    <div className=" row blog-posts-wrapper">
      {data.allStrapiBlog.edges.map(document => (
        <div key={document.node.id} className=" col-xs-12 col-md-6">
          <div className="blog-post__card">
          <div className="blog-post__header">
          <h3>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h3>
          <h5>{document.node.sub_title}</h5>
          </div>
          <div className="blog-post__image-wrapper">
          <GatsbyImage
           className="img"
            image={document.node.image.childImageSharp.gatsbyImageData}
            quality={95}
            layout="fullWidth"
             formats={["AUTO", "WEBP", "AVIF"]}
            alt="header featured image"
            style={{ marginBottom: `1.45rem` }}
      /></div>
         
          </div>
        </div>
      ))}
    </div>
    
    </div>
    </section>
        </Layout>
    )
}
export default BlogPostsPage
export const query = graphql`
query BlogPostsPageQuery {
  allStrapiBlog {
    edges {
      node {
        sub_title
        title
        content
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        id
      }
    }
  }
  }
  


`
