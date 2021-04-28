import React, { useState } from "react"
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
        <Icon className={open === true ? "icon" : "icon open"} />
        <div
          className={open === true ? "btn__rotate open" : "nav__btn closed"}
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          role="button"
          tabIndex="0"
        >
          <div className="nav__line"> </div>
          <div className="nav__line"> </div>
          <div className="nav__line"> </div>
        </div>
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
            <Icon className={"icon"} />
          </button>
        </form>
      </div>
    </div>
  )
}
export default Search
