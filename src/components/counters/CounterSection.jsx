import React, { useEffect } from "react"
import Counter from "./Counter"

const CounterSection = () => {
  setTimeout(() => {
    console.log("Hello, World!")
  }, 7000)
  useEffect(() => {
    const timer = setTimeout(() => console.log("Hello, World!"), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="counter-section dark-background">
      <div className="container">
        <section className="counters-section">
          <h2 className="counters-section__heading">Counter</h2>

          <div className="counters-sub-section">
            <div className="counters-subsection__heading-wrapper">
              <h3 className="counters-sub-section__heading">Mental Health</h3>
            </div>
            <div className="counters-wrapper">
              <Counter
                end={10000}
                suffix=" Suicides"
                decimals={2}
                decimal=","
                className="counter"
              />
              <Counter
                end={70000}
                suffix=" Attempted Suicides"
                className="counter"
              />
              <Counter
                end={20000}
                suffix=" Suicide Threats"
                className="counter"
              />
              <Counter end={20000} suffix=" Homicides" className="counter" />
              <Counter
                end={10000}
                suffix=" Attempted Homicides"
                className="counter"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CounterSection
