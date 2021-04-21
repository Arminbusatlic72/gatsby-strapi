import React from "react"
import BoardMemberCard from "./BoardMemberCard"

const BoardMembersSection = props => {
  let data = props.sectionData
  return (
    <section className="board-member-section">
      <div className="container">
        <h2 className="board-member__heading">{data.title}</h2>
        <div className="row">
          {data.board_member_info.map(boardMember => (
            <div className="col-md-4">
              <BoardMemberCard cardData={boardMember} key={boardMember.key} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BoardMembersSection
