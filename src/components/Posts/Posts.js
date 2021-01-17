import React from "react"
import { Link } from "gatsby"
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  read: {
    color: "cyan",
    padding: 0,
    display: "inline-block",
    minHeight: 0,
    minWidth: 0,
  },
  date: {
    color: "#989898",
  },
  type: {
    color: "#008080",
  },
  postGrid: {
    flexGrow: 1,
    overflow: "auto",
    minHeight: 0,
  },
  linkColor: {
    color: "#E0E0E0",
  },
})

const Posts = ({ data }) => {
  const classes = useStyles()
  const { edges: posts } = data.allMdx

  return (
    <Grid className={classes.postGrid}>
      <List component="ul">
        {posts.map(({ node: post }) => (
          <ListItem key={post.id}>
            <Grid>
              <Link
                to={`blog/${post.frontmatter.slug}`}
                className={classes.linkColor}
              >
                <Typography variant="h5">{post.frontmatter.title}</Typography>
              </Link>
              <Typography>
                <Box component="span" className={classes.date}>
                  {post.frontmatter.date} |{" "}
                </Box>
                <Box component="span" className={classes.type}>
                  {post.frontmatter.type}
                </Box>
              </Typography>
              <ListItemText>
                <Typography variant="body1">
                  {post.frontmatter.excerpt}
                </Typography>
              </ListItemText>
              <Button
                disableElevation
                disableGutters
                href={`blog/${post.frontmatter.slug}`}
                color="inherit"
                className={classes.read}
              >
                Read
              </Button>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Grid>
  )
}

export default Posts
