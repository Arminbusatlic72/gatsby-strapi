import React from "react"

const KnowledgeAndWisdomSection = props => {
  let data = props.sectionData

  return (
    <section className="knowledge-and-wisdom-section bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h6>{data.title}</h6>
            <h2>{data.sub_title}</h2>
          </div>
          <div className="col-md-7 text-wrapper">
            <div className="list">
              {data.knowledge_base_list.map(item => (
                <div className="num" key={item.id}>
                  <h4>{item.knowledge_base_list_item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KnowledgeAndWisdomSection
