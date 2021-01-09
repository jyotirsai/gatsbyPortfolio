import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import BlogLayout from "./blog-layout"
import { Typography } from "@material-ui/core"
import CodeBlock from "../components/CodeBlock/CodeBlock"
import { preToCodeBlock } from "mdx-utils"
import "./layout.css"

const shortcodes = {
  Link,
  pre: preProps => {
    const props = preToCodeBlock(preProps)

    if (props) {
      return <CodeBlock {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
  Typography,
}

export default function PageTemplate({ data: { mdx } }) {
  return (
    <BlogLayout>
      <Typography variant="h3">{mdx.frontmatter.title}</Typography>
      <Typography style={{ color: "#989898" }} gutterBottom>
        {mdx.frontmatter.date}
      </Typography>
      <MDXProvider components={shortcodes}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </MDXProvider>
    </BlogLayout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
      }
    }
  }
`
