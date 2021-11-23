import React from 'react'
import { Link } from "gatsby"
import "../styles/pages-header.css"
import { StaticImage } from "gatsby-plugin-image"


const PagesHeader = (props) => {
  return (
    <header>
      <div className="title-header">
        <div className="mian-heder">
          <Link to="/">
            <StaticImage className="arrow-return-icon" src="../images/arr_hoso.png" alt="ArrowIcon" placeholder="none" />
          </Link>
          <StaticImage className="icon2-img" src="../images/my-icon.png" alt="Icon" placeholder="none"/>
        </div>
        <h2 className = "sub-title">{props.title}</h2>
      </div>
    </header>
  )
}

export default PagesHeader