import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Section = props => {
  let data = props.sectionData

  return (
    <section className="civil-rights-section" id={data.section_id}>
      <div className="container">
        <h2 className="civil-rights-section__heading">{data.section_title}</h2>
      </div>
      <div className={`sliding-container__container`}>
        <div className={`sliding-container__media`}>
          <GatsbyImage
            className="img"
            image={data.section_image.childImageSharp.gatsbyImageData}
            quality={95}
            layout="fullWidth"
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
        <div
          className={`sliding-container__placeholder ${data.section_alignment}`}
        >
          <div className="list">
            {data.section_list.map(item => (
              <div className="num" key={data.id}>
                <h4>{item.knowledge_base_list_item}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section
