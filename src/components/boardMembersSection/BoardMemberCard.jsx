import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const BoardMemberCard = props => {
  let data = props.cardData
  return (
    <div className="board-member__card">
      <div className="board-member__image-wrapper">
        <GatsbyImage
          className="img"
          image={data.board_member_image.childImageSharp.gatsbyImageData}
          quality={95}
          layout="fullWidth"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Advisor Image"
        />
      </div>
      <div className="board-member__text-wrapper">
        <h5 className="board-member__name">{data.board_member_name}</h5>
        <p className="board-member__bio">{data.board_member_bio}</p>
        <a href="/" className="board-member__email">
          {data.board_member_email}
        </a>
      </div>
    </div>
  )
}

export default BoardMemberCard
