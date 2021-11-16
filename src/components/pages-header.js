import React from 'react'
import { Link } from "gatsby"
import Icon from "../images/my-icon.png"
import Arrow from "../images/arr_hoso.png"
import "../styles/pages-header.css"

const PagesHeader = (props) => {
  return (
    <header>
      <div className="title-header">
        <div className="mian-heder">
          <Link to="/">
            <img className="arrow-return-icon" src={Arrow} alt="ArrowIcon" />
          </Link>
          <img className="icon2-img" src={Icon} alt="Icon" />
        </div>
        <h2 className = "sub-title">{props.title}</h2>
      </div>
    </header>
  )
}

export default PagesHeader