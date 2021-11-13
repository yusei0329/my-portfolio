import React from "react"
import { graphql, Link } from "gatsby"
import PagesLayout from "../components/pages-layout"
import Img from "gatsby-image"
import { AiOutlineRollback } from "react-icons/ai"
import "../styles/post.css"

export default function Post({ data }) {
  const link = data.markdownRemark.frontmatter.link;
  return (
    <PagesLayout title={data.markdownRemark.frontmatter.title}>
      <div className="main-post">
        <div className="post-content">
          <Img className="post-image"
            fluid={data.markdownRemark.frontmatter.topImage.childImageSharp.fluid}
            alt="cover"
          />
          <div className="post-body">
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            <div className="post-link-text">
              <a href={link} target="_blank" rel="nofollow">
                {link}
              </a>
            </div>
          </div>
          <Link className="home-link-text" to="/">
            <AiOutlineRollback size="3rem" />
          </Link>
        </div>
      </div>
    </PagesLayout>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      link
      skills
      topImage {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`