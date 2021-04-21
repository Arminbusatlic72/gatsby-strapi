import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { StaticImage } from "gatsby-plugin-image"
import Icon from "../../assets/icons8-search.svg"
const Search = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="header__search-box">
      <div
        className="search-box__icon-holder"
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
        role="presentation"
      >
        Search
        <Icon
          // src="../../images/icons8-search-100.png"
          // height={20}
          // width={20}
          className={open === true ? "icon" : "icon open"}
        />
        <StaticImage
          src="../../images/close.png"
          height={30}
          width={30}
          className={open === true ? "icon open" : "icon"}
        />
      </div>

      <div
        className={
          open === true ? "search-box__wrapper show" : "search-box__wrapper"
        }
      >
        <form action="/" method="get" className="search-box__form">
          <input
            className="search-box__input"
            type="text"
            id="header-search"
            placeholder="Search blog posts"
            name="s"
          />

          <button className="search-box__button" type="submit">
            <FontAwesomeIcon icon={faSearch} className="icon" />
          </button>
        </form>
      </div>
    </div>
  )
}
export default Search
