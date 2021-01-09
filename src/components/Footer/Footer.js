import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
  footer: {
    bottom: 0,
    textAlign: "center",
    marginTop: 20,
  },
})
const Footer = () => {
  const classes = useStyles()
  const date = new Date()
  const year = date.getFullYear()
  return (
    <Grid className={classes.footer}>
      <Typography style={{ color: "#888888" }}>
        &copy; Jyotir Sai {year}
      </Typography>
    </Grid>
  )
}

export default Footer
