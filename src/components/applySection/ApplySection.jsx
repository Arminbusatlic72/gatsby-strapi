import React from "react"
// import CreateKnowledgeBase from "./CreateKnowledgeBase"

const ApplySection = props => {
  let data = props.sectionData

  return (
    <section className="apply-section">
      <div className="container">
        <h6>{data.sub_title}</h6>
        <div className="apply-section__heading-wrapper">
          <h2>{data.title}</h2>
          <button className="btn-contact">Contact us</button>
        </div>
        <div className="apply-section__text-wrapper">
          <p>{data.paragraph}</p>

          <ol>
            {data.verification.map(verificationItem => (
              <li key={verificationItem.id}>
                {verificationItem.verification_list_item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default ApplySection
