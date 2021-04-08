import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
const Search = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="header__search-box">
      <div
        className="search-box__icon-holder"
        onClick={() => setOpen(!open)}
        onKeyDown={() => setOpen(!open)}
        role="button"
        tabIndex="0"
      >
        Search
      </div>
      <div
        className={
          open === true ? "search-box__wrapper show" : "search-box__wrapper"
        }
      >
        <form action="/" method="get" className="search-box__form">
          <label className="search-box__label" htmlFor="header-search">
            <span></span>
          </label>
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
