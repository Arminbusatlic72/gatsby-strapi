import React from "react"

function OurMission(props) {
  let data = props.sectionData
  return (
    <div className="container-fluid">
      <section className="our-mission-section">
        <div className="container light-background">
          <hr></hr>
          <div className="our-mission-section__title-wrapper">
            <h3 className="our-mission-section__title">{data.title}</h3>
            <h5>{data.text}</h5>
          </div>
          <hr></hr>
        </div>
      </section>
    </div>
  )
}

export default OurMission
