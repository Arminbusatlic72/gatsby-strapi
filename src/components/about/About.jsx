import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const About = props => {
  let data = props.aboutData

  return (
    <div className="container">
      <section className="about-section">
        <h2 className="about-section__heading">{data.about.heading}</h2>
        <div className="row">
          <div className="col-xs-12 col-sm-6 no-padding order-2">
            <div className="about-section__img-wrapper">
              <GatsbyImage
                className="img"
                image={data.about.about_image.childImageSharp.gatsbyImageData}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 no-padding order-1">
            <div className="about-section__text-wrapper">
              <p>{data.about.paragraph1}</p>
              <p>{data.about.paragraph2}</p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 no-padding order-3">
            <div className="about-section__text-wrapper--left">
              <p>
                <p>{data.about.paragraph3}</p>
              </p>
              <p>
                <p>{data.about.paragraph4}</p>
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 no-padding order-4">
            <div className="about-section__img-wrapper">
              <GatsbyImage
                className="img"
                image={data.about.about_image1.childImageSharp.gatsbyImageData}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
