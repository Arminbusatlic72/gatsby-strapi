import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <div className="header__logo">
      <Link to="/">
        <StaticImage
          className=""
          src="../../images/logo.png"
          width={150}
          height={85}
          quality={95}
          // layout="fullWidth"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Logo"
          style={{ marginTop: `1.45rem` }}
        />
      </Link>
    </div>
  )
}

export default Logo
