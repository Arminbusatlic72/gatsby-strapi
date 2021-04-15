import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAtom } from "@fortawesome/free-solid-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"

const Logo = () => {
  config.autoAddCss = false
  return (
    <div className="header__logo">
      <Link to="/">
        {/* <FontAwesomeIcon icon={faAtom} className="logo" /> */}
        GKF
      </Link>
    </div>
  )
}

export default Logo
