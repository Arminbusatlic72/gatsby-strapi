import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import CounterSubSection from "./CounterSubSection"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const CounterSection = () => {
  const data = useStaticQuery(graphql`
    query CounterQuery {
      allStrapiCounterSection {
        edges {
          node {
            title
            counter_sub_section {
              title
              id
              counter {
                id
                knowledge_base_number
                knowledge_base_title
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="counter-section dark-background">
      <div className="container">
        <section className="counters-section">
          <h2 className="counters-section__heading">
            {data.allStrapiCounterSection.edges[0].node.title}
          </h2>
          <Slider
            dots={false}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={10000}
          >
            {data.allStrapiCounterSection.edges[0].node.counter_sub_section.map(
              subsection => (
                <div>
                  <CounterSubSection
                    key={subsection.id}
                    sectionData={subsection}
                  />
                </div>
              )
            )}
          </Slider>
        </section>
      </div>
    </div>
  )
}

export default CounterSection
