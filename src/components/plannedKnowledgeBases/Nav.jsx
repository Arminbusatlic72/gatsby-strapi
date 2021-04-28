import React, { useState, Fragment } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

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
              onClick={() => {
                scrollTo("#civilrights")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
              onKeyDown={() => {
                scrollTo("#civilrights")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
              role="presentation"
            >
              Civil Rights
            </div>
          </li>
          <li className="page-navigation__list-item">
            <div
              onClick={() => {
                scrollTo("#economicaccess")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
              onKeyDown={() => {
                scrollTo("#economicaccess")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
              role="presentation"
            >
              Economics Access
            </div>
          </li>

          <li className="page-navigation__list-item">
            <div
              onClick={() => {
                scrollTo("#environmental")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
              onKeyDown={() => {
                scrollTo("#environmental")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
              role="presentation"
            >
              Environmental
            </div>
          </li>
          <li className="page-navigation__list-item">
            <div
              onClick={() => {
                scrollTo("#health")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
              onKeyDown={() => {
                scrollTo("#health")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
              role="presentation"
            >
              Health
            </div>
          </li>
          <li className="page-navigation__list-item">
            <div
              onClick={() => {
                scrollTo("#humanrights")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
              onKeyDown={() => {
                scrollTo("#humanrights")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
              role="presentation"
            >
              Human Rights
            </div>
          </li>
          <li className="page-navigation__list-item">
            <div
              onClick={() => {
                scrollTo("#legal")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
              onKeyDown={() => {
                scrollTo("#legal")
                if (window.innerWidth < 757) {
                  setOpen(!open)
                }
              }}
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
