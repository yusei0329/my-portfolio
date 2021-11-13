import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../images/my-icon.jpeg"
import "../styles/header.css"
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { RiUserLocationFill } from "react-icons/ri"
import { BsArrowDown } from "react-icons/bs"
import { MdNavigateNext } from "react-icons/md"


const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            from
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
      <div className="main-title-header">
        <img className="icon-img" src={Icon} alt="Icon" />
        <h2 className="main-h2-text">
          {data.site.siteMetadata.title}
        </h2>
        <p className="main-h3-text">
          <RiUserLocationFill size="1.5rem" />
          {data.site.siteMetadata.from}
        </p>
        <div className="contact">
          <a className="mail-text" href={mailLink}>
            <AiOutlineMail size="2rem" />
            {data.site.siteMetadata.user.email}
          </a>
          <a className="github-text" href={githublink} target="_blank">
            <AiOutlineGithub size="2rem" />
            GitHub
          </a>
        </div>
        <div className = "arrow-icon">
          <a>
            <BsArrowDown size="2rem"/>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header