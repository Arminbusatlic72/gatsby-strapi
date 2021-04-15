import React from "react"

import Menu from "../menu/Menu"
import Search from "../search/Search"
import Logo from "../logo/Logo"

const Header = () => {
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="header__content-wrapper">
          <div className="row">
            <div className="col-xs-4 col-md-4">
              <Menu />
            </div>

            <div className="col-xs-4 col-md-4">
              <Logo />
            </div>
            <div className="col-xs-4 col-md-4">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
