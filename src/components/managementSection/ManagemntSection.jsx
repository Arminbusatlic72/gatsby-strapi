import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import Src from "../../images/henry1.jpg"

const ManagementSection = () => {
  return (
    <section className="management-section">
      <div className="heading-wrapper">
        <h2 className="management-section__heading">Management</h2>
      </div>
      <div className="container">
        <div className="management-section__container">
          <div className="management-section__card">
            <div className="management-section__img-wrapper">
              <StaticImage
                className="img"
                src={"../../images/manamgement.jpg"}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                // style={{ marginBottom: `1.45rem` }}
              />
            </div>
            <h5 className="management-section__name">Armin</h5>
            <p className="management-section__position">Direktor</p>
          </div>

          <div className="management-section__card">
            <div className="management-section__img-wrapper">
              <StaticImage
                className="img"
                src={"../../images/manamgement.jpg"}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                // style={{ marginBottom: `1.45rem` }}
              />
            </div>
            <h5 className="management-section__name">Armin</h5>
            <p className="management-section__position">Direktor</p>
          </div>

          <div className="management-section__card">
            <div className="management-section__img-wrapper">
              <StaticImage
                className="img"
                src={"../../images/manamgement.jpg"}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                // style={{ marginBottom: `1.45rem` }}
              />
            </div>
            <h5 className="management-section__name">Armin</h5>
            <p className="management-section__position">Direktor</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManagementSection
