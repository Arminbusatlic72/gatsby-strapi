import React from "react"
import Nav from "./Nav"
import ProposeKnowledgeBaseSection from "./ProposeKnowledgeBaseSection"
import { StaticImage } from "gatsby-plugin-image"

function PlannedKnowledgeBasesSection() {
  return (
    <>
      <section className="planed-knowledge-bases-section light-background">
        <div className="container text-center">
          <h2 className="planed-knowledge-bases-section__heading">
            Planned Knowledge Bases
          </h2>
        </div>
        <Nav />

        <section className="civil-rights-section">
          <div className="container">
            <h2 className="civil-rights-section__heading">Civil Rights</h2>
          </div>
          <div className="sliding-container__container">
            <div className="sliding-container__media">
              <StaticImage
                className="img"
                src={"../../images/synapse.jpg"}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
            </div>
            <div className="sliding-container__placeholder">
              <ul>
                <li>
                  <h5>Education</h5>
                </li>
                <li>
                  <h5>Disability</h5>
                </li>
                <li>
                  <h5>Employment</h5>
                </li>
                <li>
                  <h5>Gender Equality</h5>
                </li>
                <li>
                  <h5>Housing</h5>
                </li>
                <li>
                  <h5>LGBTQ</h5>
                </li>
                <li>
                  <h5>Voting</h5>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="civil-rights-section">
          <div className="container">
            <h2 className="civil-rights-section__heading">Economic Access</h2>
          </div>
          <div className="sliding-container__container">
            <div className="sliding-container__placeholder left">
              <ul>
                <li>
                  <h5>Education</h5>
                </li>
                <li>
                  <h5>Food</h5>
                </li>
                <li>
                  <h5>Healthcare</h5>
                </li>
                <li>
                  <h5>Housing</h5>
                </li>
              </ul>
            </div>
            <div className="sliding-container__media">
              <StaticImage
                className="img"
                src={"../../images/decisions.jpg"}
                quality={95}
                layout="fullWidth"
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby astronaut"
                style={{ marginBottom: `1.45rem` }}
              />
            </div>
          </div>
        </section>
        <ProposeKnowledgeBaseSection />
      </section>
    </>
  )
}

export default PlannedKnowledgeBasesSection
