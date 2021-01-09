import React from "react"
import Header from "../Header/Header"
import Posts from "../Posts/Posts"
import Footer from "../Footer/Footer"
import { Paper } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    width: "100%",
    margin: "0 auto",
    padding: 15,
    backgroundColor: "rgba(8, 8, 8, 0.85)",
    color: "#E0E0E0",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    transform: "translate(-50%, 0)",
    display: "flex",
    flexDirection: "column",
  },
})

const Home = ({ data }) => {
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      <Header />
      <Posts data={data} />
      <Footer />
    </Paper>
  )
}

export default Home
