import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

const CreateKnowledgeBase = () => {
  return (
    <section className="create-knowledge-base-section dark-background">
      <div className="container">
        <h6>Possibilities</h6>

        <h3 className="create-knowledge-base-section__heading">
          Create knowledge Base
        </h3>

        <div className="row">
          <div className="col-md-6">
            <div>
              <p>Use Catalyst to create new Create knowledge Base...</p>
              <FontAwesomeIcon icon={faDownload} className="apply-icon" />

              <a href="/">Download fillable PDF form</a>
            </div>
          </div>

          <div className="col-md-6">
            <div>
              <p>Use Catalyst to enhance knowledge Base...</p>
              <FontAwesomeIcon icon={faDownload} className="apply-icon" />
              <a href="/">Download fillable PDF form</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CreateKnowledgeBase
