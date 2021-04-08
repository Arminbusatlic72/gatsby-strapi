import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronUp,
  faMapMarkerAlt,
  faUsers,
  faEnvelope,
  faFacebookF,
  fbTweeterF,
} from "@fortawesome/free-solid-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiFooter {
        edges {
          node {
            addressLine1
            addressLine2
            addressLine3
            contactList {
              info
              url
              id
            }
            copyright
            heading
            logo {
              childImageSharp {
                gatsbyImageData(width: 150)
              }
            }
            socialMediaMenu {
              icon
              id
              url
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="footer-logo">
              <Link to="/">
                <GatsbyImage
                  image={
                    data.allStrapiFooter.edges[0].node.logo.childImageSharp
                      .gatsbyImageData
                  }
                  alt="logo"
                  layout="fixed"
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                />
              </Link>
            </div>

            <p>{data.allStrapiFooter.edges[0].node.heading}</p>
          </div>

          <div className="col-xs-12 col-md-6">
            <div className="row">
              <div className="col-xs-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                <h3 className="address">Posjetite nas</h3>
                <p>
                  {data.allStrapiFooter.edges[0].node.addressLine1}
                  <br />
                  {data.allStrapiFooter.edges[0].node.addressLine2}
                  <br />
                  {data.allStrapiFooter.edges[0].node.addressLine3}
                </p>
              </div>

              <div className="col-xs-4">
                <FontAwesomeIcon icon={faUsers} className="icon" />
                <h3 className="social">Zapratite na socijalnim mrežama</h3>
                <ul>
                  {data.allStrapiFooter.edges[0].node.socialMediaMenu.map(
                    socialMediaMenu => (
                      <li key={socialMediaMenu.id}>
                        <a href={socialMediaMenu.url}>
                          <FontAwesomeIcon
                            icon={socialMediaMenu.icon}
                            className="icon"
                          />
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="col-xs-6">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                <h3 className="contact">Kontaktirajte nas</h3>
                <ul>
                  {data.allStrapiFooter.edges[0].node.contactList.map(
                    contact => (
                      <li key={contact.id}>
                        <a href={contact.url}>{contact.info}</a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>

          <p className="copyright">
            {data.allStrapiFooter.edges[0].node.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer