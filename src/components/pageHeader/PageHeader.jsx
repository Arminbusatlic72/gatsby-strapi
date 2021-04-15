import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Src from "../../images/henry1.jpg"

const PageHeader = () => {
  return (
    <div className="page-header__wrapper">
      <StaticImage
        className="img"
        src={"../../images/neuralstem.jpg"}
        quality={95}
        layout="fullWidth"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <div className="page-header__title-wrapper">
        <h2 className="page-header__title">Our Mission</h2>
      </div>
    </div>
  )
}

export default PageHeader
