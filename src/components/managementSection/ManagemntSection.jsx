import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import AdvisorCard from "./AdvisorCard"

const ManagementSection = props => {
  let data = props.managementData
  return (
    <section className="management-section">
      <div className="container">
        <h2 className="management-section__heading">{data.heading}</h2>

        <div className="management-section__card">
          <div className="management-section__img-wrapper">
            <GatsbyImage
              className="img"
              image={data.image.childImageSharp.gatsbyImageData}
              quality={95}
              layout="fullWidth"
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Organization founder image"
            />
          </div>

          <div className="management-section__text-wrapper">
            <h3 className="management-section__name">{data.name}</h3>
            {/* <p className="management-section__bio">{data.biography}</p> */}
            <p className="management-section__bio">
              {data.manager_bio.paragraph}
            </p>
            <p className="management-section__bio">
              {data.manager_bio.paragraph1}
            </p>
            <p className="management-section__bio">
              {data.manager_bio.paragraph2}
            </p>
            <p className="management-section__bio">
              {data.manager_bio.paragraph3}
            </p>
            <p className="management-section__bio">
              {data.manager_bio.paragraph4}
            </p>
          </div>
        </div>
        <h2 className="management-section__heading">{data.sub_heading}</h2>
        <div className="row">
          <div className="advisor-card__container">
            {data.advisors.map(advisor => (
              <AdvisorCard cardData={advisor} key={advisor.key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ManagementSection
