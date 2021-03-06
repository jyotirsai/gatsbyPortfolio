import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Home from "../components/Home/Home"
import Background from "../components/Background/Background"

const IndexPage = ({ data }) => (
  <Background>
    <Helmet>
      <title>jyotirsai.com</title>
      <link href="https://jyotirsai.com" />
    </Helmet>
    <Home data={data} />
  </Background>
)

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            slug
            date(formatString: "MMMM Do YYYY")
            excerpt
            title
            type
          }
        }
      }
    }
  }
`

export default IndexPage
