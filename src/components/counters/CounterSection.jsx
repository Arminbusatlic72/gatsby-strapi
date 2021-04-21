import React from "react"
import Counter from "./Counter"

const CounterSection = () => {
  return (
    <div className="counter-section dark-background">
      <div className="container">
        <section className="counters-section">
          <h2 className="counters-section__heading">Counter</h2>
          <div className="counters-wrapper">
            <div className="counter">
              <h5>Mental Health</h5>
              <p>10 000</p>
            </div>
            <div className="counter">
              <h5>Mental Health</h5>
              <p>10 000</p>
            </div>
            <Counter />
          </div>
        </section>
      </div>
    </div>
  )
}

export default CounterSection
