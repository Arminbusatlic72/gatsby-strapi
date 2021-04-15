import React from "react"

const Nav = () => {
  return (
    <div className="page-nav">
      <div className="container">
        <ul className="page-navigation__list">
          <li className="page-navigation__list-item">
            <a>Civil rights</a>
          </li>
          <li className="page-navigation__list-item">
            <a>Economic Access</a>
          </li>
          <li className="page-navigation__list-item">
            <a>Environmental</a>
          </li>
          <li className="page-navigation__list-item">
            <a>Health</a>
          </li>
          <li className="page-navigation__list-item">
            <a>Human rights</a>
          </li>
          <li className="page-navigation__list-item">
            <a>Legal</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
