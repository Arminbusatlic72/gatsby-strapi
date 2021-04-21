import React from "react"
import Nav from "./Nav"
import Section from "./Section"

const PlannedKnowledgeBasesSection = props => {
  let data = props.sectionData
  console.log(data)

  return (
    <section className="planed-knowledge-bases-section light-background">
      <div className="container text-center">
        <h2 className="planed-knowledge-bases-section__heading">
          Planned Knowledge Bases
        </h2>
      </div>
      <Nav />
      {data.section.map(section => (
        <Section key={section.id} sectionData={section} />
      ))}
    </section>
  )
}

export default PlannedKnowledgeBasesSection
