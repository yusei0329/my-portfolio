import React from "react";
import Layout from "../components/layout"
import Hero from "../components/hero"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"


export default function Home({ data }) {
  return (
    <>
      <Layout>
        <Hero />
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
    </>
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
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`