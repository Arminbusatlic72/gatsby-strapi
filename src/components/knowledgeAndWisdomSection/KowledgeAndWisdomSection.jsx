import React from "react"

function KowledgeAndWisdomSection() {
  return (
    <section className="knowledge-and-wisdom-section bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <h6>Knowledge&wisdom</h6>
            <h2>Extremely qualified knowledge experts will: </h2>
          </div>
          <div className="col-md-7 text-wrapper">
            <ul>
              <li>
                <h5>
                  pledge to donate their valuable knowledge and wisdom for
                  public good.
                </h5>
              </li>
              <li>
                <h5>
                  receive free AI software tools. technical support, and
                  financial assistance
                </h5>
              </li>
              <li>
                <h5>
                  {" "}
                  create AI knowledge bases that address critical social causes
                </h5>
              </li>
              <li>
                <h5>
                  deploy AI knowledge bases within AI applications for free
                  public use.
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default KowledgeAndWisdomSection
