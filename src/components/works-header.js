import React from 'react'
import { useStaticQuery, Link, graphql } from "gatsby"
import Icon from "../images/my-icon.jpeg"
import Arrow from "../images/arr_hoso.png"
import "../styles/works-header.css"

const WorksHeader = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )

  return (
    <header>
      <div className="mian-heder">
        <Link to="/">
          <img className="arrow-icon" src={Arrow} alt="ArrowIcon" />
        </Link>
        <img className="icon2-img" src={Icon} alt="Icon" />
      </div>
      <h2>{data.site.siteMetadata.author}</h2>
    </header>
  )
}

export default WorksHeader