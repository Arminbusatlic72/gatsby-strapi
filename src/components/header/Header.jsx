import React from "react"
// import Link from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCoffee,
  faAddressBook,
  faAirFreshener,
  faAmbulance,
  faAtom,
  faBus,
  faCoins,
  faDice,
} from "@fortawesome/free-solid-svg-icons"
import Menu from "../menu/Menu"
import Search from "../search/Search"
import { config } from "@fortawesome/fontawesome-svg-core"

const Header = () => {
  config.autoAddCss = false
  return (
    <div className="header">
      <div className="container-fluid">
        <div className="header__content-wrapper">
          <div className="row">
            <div className="col-xs-4 col-md-4">
              <Menu />
            </div>

            <div className="col-xs-4 col-md-4">
              <FontAwesomeIcon icon={faCoffee} className="icon" />
              <FontAwesomeIcon icon={faAddressBook} className="icon" />
              <FontAwesomeIcon icon={faAirFreshener} className="icon" />
              <FontAwesomeIcon icon={faAtom} className="icon" />
              <FontAwesomeIcon icon={faAmbulance} className="icon" />
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
