import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiMainMenu {
        edges {
          node {
            body {
              id
              label
              url
            }
          }
        }
      }
    }
  `)

  const [open, setOpen] = useState(false)
  return (
    <nav className="header__nav">
      <div
        className={open === true ? "btn__rotate" : "nav__btn"}
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
        role="button"
        tabIndex="0"
      >
        <div className="nav__line"> </div>
        <div className="nav__line"> </div>
        <div className="nav__line"> </div>
      </div>
      <ul className={open === true ? "nav__menu menu-show" : "nav__menu"}>
        <div className="container-fluid">
          <div className="nav__content-wrapper">
            {data.allStrapiMainMenu.edges[0].node.body.map(body => {
              return (
                <li key={body.id} className="nav__menu-item">
                  <Link className="nav__menu-link" to={`/${body.url}`}>
                    {body.label}
                  </Link>
                </li>
              )
            })}
          </div>
        </div>
      </ul>
    </nav>
  )
}
export default Menu
