import React from "react"
import Home from "../components/Home/Home"
import Background from "../components/Background/Background"

const IndexPage = ({ data }) => (
  <Background>
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
