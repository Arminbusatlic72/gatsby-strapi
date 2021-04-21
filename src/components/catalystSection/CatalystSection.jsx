import React from "react"

const CatalystSection = props => {
  let data = props.sectionData
  return (
    <section className="catalyst-section">
      <div className="container">
        <h6>{data.sub_title}</h6>
        <h2 className="catalyst-section__heading">{data.title}</h2>
        <div className="catalyst-section__text-wrapper">
          <p>{data.paragraph}</p>

          <a href="https://www.incap.com/contact/">{data.link_url}</a>
        </div>
      </div>
    </section>
  )
}

export default CatalystSection
