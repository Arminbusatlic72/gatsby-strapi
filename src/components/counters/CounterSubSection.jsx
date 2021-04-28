import React from "react"
import Counter from "./Counter"

const CounterSubSection = props => {
  let data = props.sectionData
  return (
    <div className="counters-sub-section">
      <div className="counters-subsection__heading-wrapper">
        <h3 className="counters-sub-section__heading">{data.title}</h3>
      </div>
      <div className="counters-wrapper">
        {data.counter.map(counter => (
          <Counter
            key={counter.id}
            end={counter.knowledge_base_number}
            suffix={` ${counter.knowledge_base_title}`}
            className="counter"
          />
        ))}
      </div>
    </div>
  )
}

export default CounterSubSection
