import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import Icon from "../../assets/up-arrow.svg"

const AdvisorCard = props => {
  let data = props.cardData
  const [open, setOpen] = useState(false)
  return (
    <div className="advisor-card">
      <div className="advisor-card__header">
        <h4
          className={
            open === true ? "advisor-card__name blue" : "advisor-card__name"
          }
        >
          {data.advisor_name}
        </h4>
        <div
          className="advisor-card__accordion-btn"
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          role="presentation"
        >
          <Icon
            className={
              open === true
                ? "advisor-card__icon card-open"
                : "advisor-card__icon"
            }
          />
        </div>
      </div>
      <div
        className={
          open === true
            ? "advisor-card__text-wrapper is-active"
            : "advisor-card__text-wrapper"
        }
      >
        <p>{data.advisor_bio}</p>
      </div>
      <div className="advisor-card__image-wrapper">
        <GatsbyImage
          className="img"
          image={data.advisor_image.childImageSharp.gatsbyImageData}
          quality={95}
          layout="fullWidth"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Advisor Image"
        />
      </div>
    </div>
  )
}

export default AdvisorCard
