import React from "react";
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"



export default function Home({ data }) {
  return (
    <div>
      <Layout>
        <h1 className="main-header">YUSEI NIWA</h1>
        {data.allMarkdownRemark.nodes.map(node => (
          <div key={node.id}>
            <div className="post-link">
              <Link to={node.fields.slug}>
                <Img className="post-link-image"
                  fluid={node.frontmatter.topImage.childImageSharp.fluid}
                  alt="cover"
                />
              </Link>
            </div>
            {/* <div className="post-link-text">
              <Link to={node.fields.slug}>
                <h2>{node.frontmatter.title}</h2>
              </Link>
            </div> */}
          </div>
        ))}
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          title
          topImage {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`