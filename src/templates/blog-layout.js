import React from "react"
import Header from "../components/Header/Header"
import { Box, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  root: {
    color: "#E0E0E0",
  },
  page: {
    maxWidth: 1000,
    width: "100%",
    margin: "0 auto",
    padding: 15,
  },
  main: {
    fontFamily: "Roboto",
    padding: "35px 5px",
  },
  button: {
    color: "cyan",
    padding: 0,
    display: "inline-block",
    minHeight: 0,
    minWidth: 0,
    marginBottom: 10,
  },
})

const BlogLayout = ({ children }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root} component="div">
      <Box className={classes.page} component="div">
        <Header />
        <Box className={classes.main} component="div">
          <Button className={classes.button} href="/">
            Back to home
          </Button>
          {children}
        </Box>
      </Box>
    </Box>
  )
}

export default BlogLayout
