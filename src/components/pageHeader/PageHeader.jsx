import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const PageHeader = props => {
  let data = props.headerData
  return (
    <div className="page-header__wrapper">
      <GatsbyImage
        className="img"
        image={data.featured_image.childImageSharp.gatsbyImageData}
        quality={95}
        layout="fullWidth"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="header featured image"
        style={{ marginBottom: `1.45rem` }}
      />
      <div className="page-header__title-wrapper">
        <h2 className="page-header__title">{data.title}</h2>
      </div>
    </div>
  )
}

export default PageHeader
