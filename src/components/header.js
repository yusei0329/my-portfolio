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
              github
            }
          }
        }
      }
    `
  )

  const mailLink = "mailto: " + data.site.siteMetadata.user.email;
  const githublink = data.site.siteMetadata.user.github;

  return (
    <header>
      <img className="icon-img" src={Icon} alt="Icon" />
      <h2 className="main-h2-text">{data.site.siteMetadata.title}</h2>
      <a className="mail-text" href={mailLink}>{data.site.siteMetadata.user.email}</a>
      <a className="github-text" href={githublink}>GitHub</a>
    </header>
  )
}

export default Header