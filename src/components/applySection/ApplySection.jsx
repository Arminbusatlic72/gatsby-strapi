import React from "react"
// import CreateKnowledgeBase from "./CreateKnowledgeBase"

const ApplySection = () => {
  return (
    <section className="apply-section">
      <div className="container">
        <h6>Possibilities</h6>
        <div className="apply-section__heading-wrapper">
          <h2>Apply</h2>
          <button className="btn-contact">Contact us</button>
        </div>
        <div className="apply-section__text-wrapper">
          <p>
            Qulified applicants, as individuals or organizations, may receive
            free licence for Catalyst and knowledge bases.
          </p>
          <p>In order to qualified, applicants must ferified the following:</p>
          <ol>
            <li>
              subject matter expertise for a listed or proposed knowledge base
            </li>
            <li>un interest in or a history of working for social causes</li>
            <li>
              available time to provide expertise to one or more knowledge base
            </li>
          </ol>
        </div>
      </div>
      {/* <CreateKnowledgeBase /> */}
    </section>
  )
}

export default ApplySection
