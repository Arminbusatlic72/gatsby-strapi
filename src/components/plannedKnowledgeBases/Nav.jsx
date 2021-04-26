import React, { useState, Fragment } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

// import { useScrollYPosition } from "react-use-scroll-position"
// import { AnchorLink } from "gatsby-plugin-anchor-links"

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className="page-nav__btn"
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
        role="button"
        tabIndex="0"
      >
        Menu
      </div>

      <ul
        className={
          open === true
            ? "page-navigation__list menu-show"
            : "page-navigation__list"
        }
      >
        <Fragment>
          <li className="page-navigation__list-item">
            <div
              onClick={() => scrollTo("#civilrights")}
              onKeyDown={() => scrollTo("#civilrights")}
              role="presentation"
            >
              Civil Rights
            </div>
          </li>
          <li className="page-navigation__list-item">
            <div
              onClick={() => scrollTo("#economicaccess")}
              onKeyDown={() => scrollTo("#economicaccess")}
              role="presentation"
            >
              Economics Access
            </div>
          </li>

          <li className="page-navigation__list-item">
            <div
              onClick={() => scrollTo("#environmental")}
              onKeyDown={() => scrollTo("#environmental")}
              role="presentation"
            >
              Environmental
            </div>
          </li>
          <li className="page-navigation__list-item">
            <div
              onClick={() => scrollTo("#health")}
              onKeyDown={() => scrollTo("#health")}
              role="presentation"
            >
              Health
            </div>
          </li>
          <li className="page-navigation__list-item">
            <div
              onClick={() => scrollTo("#humanrights")}
              onKeyDown={() => scrollTo("#humanrights")}
              role="presentation"
            >
              Human Rights
            </div>
          </li>
          <li className="page-navigation__list-item">
            <div
              onClick={() => scrollTo("#legal")}
              onKeyDown={() => scrollTo("#legal")}
              role="presentation"
            >
              Legal
            </div>
          </li>
        </Fragment>
      </ul>
    </>
  )
}

export default Nav
