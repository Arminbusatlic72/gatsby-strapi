import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import Src from "../../images/henry1.jpg"

const About = () => {
  return (
    <div className="container-fluid">
      <section className="about-section">
        <div className="row">
          <div className="col-xs-12 col-sm-6 no-padding">
            <div className="about-section__img-wrapper">
              <StaticImage
                className="img"
                src="../../images/henry1.jpg"
                // width={450}
                // height={400}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 no-padding">
            <div className="about-section__text-wrapper">
              <h2 className="about-section__heading">About our organization</h2>
              <p>
                GKF is tax exempt 501(c) (3) non profit organization that
                provides free Catalyst AI software and knowledge bases, grants,
                and supports to individuals and organizations who promise to
                develop and share free AI software applications to affect
                positive social change.
              </p>
              <p>
                Catalyst is an AI software rapid application development tool
                that empowers knowledge experts develop knowledge bases and AI
                software applications.
              </p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 no-padding">
            <div className="about-section__text-wrapper--left">
              <p>
                Subject matter experts in environmental, mental and physical
                health, civil rights, immigration, economic, and other social
                causes use Catalyst to create new knowledge bases or enhance
                existing ones.
              </p>
              <p>
                None experts can access these free AI software applications to
                make experts decisions that are correct, consistent and
                supportable to affect positive social change.
              </p>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 no-padding">
            <div className="about-section__img-wrapper">
              <StaticImage
                className="img"
                src="../../images/1angel.jpg"
                // width={450}
                // height={400}
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
