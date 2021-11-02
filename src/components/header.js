import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../images/my-icon.jpeg"
import "../styles/header.css"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            user {
              email
            }
          }
        }
      }
    `
  )

  const mailLink = "mailto: " + data.site.siteMetadata.user.email;
  return (
    <header>
      <img className="icon-img" src={Icon} alt="Icon" />
      <h2 className="main-h2-text">{data.site.siteMetadata.title}</h2>
      <a className="mail-text" href={mailLink}>{data.site.siteMetadata.user.email}</a>
    </header>
  )
}

export default Header