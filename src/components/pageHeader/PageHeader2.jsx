import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const PageHeader = () => {
  return (
    <div className="page-header__wrapper">
      <StaticImage
        className="img"
        src={"../../images/familyLaw.jpg"}
        quality={95}
        layout="fullWidth"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <div className="page-header__title-wrapper">
        <h2 className="page-header__title">Apply</h2>
      </div>
    </div>
  )
}

export default PageHeader
