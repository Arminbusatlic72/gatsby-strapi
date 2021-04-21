import React, { useState } from "react"

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
      <div className={open === true ? "page-nav menu-show" : "page-nav"}>
        <ul className="page-navigation__list">
          <li className="page-navigation__list-item">
            <a href="/">Civil rights</a>
          </li>
          <li className="page-navigation__list-item">
            <a href="/">Economic Access</a>
          </li>
          <li className="page-navigation__list-item">
            <a href="/">Environmental</a>
          </li>
          <li className="page-navigation__list-item">
            <a href="/">Health</a>
          </li>
          <li className="page-navigation__list-item">
            <a href="/">Human rights</a>
          </li>
          <li className="page-navigation__list-item">
            <a href="/">Legal</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav
