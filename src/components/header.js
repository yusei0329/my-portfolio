import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import "../styles/header.css"
import { AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { RiUserLocationFill } from "react-icons/ri"
import { FaShare } from "react-icons/fa"
import { BsArrowDown } from "react-icons/bs"
import { StaticImage } from "gatsby-plugin-image"

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
        <StaticImage className="icon-img" src="../images/my-icon.png" alt="Icon" placeholder="dominantColor" />
        <h2 className="main-h2-text">
          {data.site.siteMetadata.title}
        </h2>
        <p className="main-h3-text">
          <RiUserLocationFill size="1.5rem" />
          {data.site.siteMetadata.from}
        </p>
        <div className="contact">
          <h3 className="about-me-text">
            <Link to="/aboutPage">
              <FaShare size="1.5rem" />
              About Me
            </Link>
          </h3>
          <a className="mail-text" href={mailLink}>
            <AiOutlineMail size="2rem" />
            {data.site.siteMetadata.user.email}
          </a>
          <a className="github-text" href={githublink} target="_blank" rel="noreferrer">
            <AiOutlineGithub size="2rem" />
            GitHub
          </a>
        </div>
        <div className="arrow-box">
          <div className="arrow-icon">
            <a>
              <BsArrowDown size="2rem" />
            </a>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header