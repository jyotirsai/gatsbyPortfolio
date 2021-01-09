import React from "react"
import { Link } from "gatsby"
import { Grid, Typography, IconButton, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { LinkedIn, GitHub, Email } from "@material-ui/icons"

const useStyles = makeStyles({
  header: {
    marginBottom: 20,
  },
  introPadding: {
    padding: "5px 5px",
  },
  iconStyles: {
    color: "white",
    "&:hover": {
      color: "cyan",
    },
  },
  dividerStyles: {
    color: "red",
    width: "100%",
    background:
      "-webkit-gradient(linear, 0 0, 100% 0, from(transparent), to(transparent), color-stop(50%, cyan))",
  },
})

const Header = () => {
  const classes = useStyles()

  const contacts = [
    {
      link: "https://www.linkedin.com/in/jyotirsai/",
      icon: <LinkedIn />,
    },
    {
      link: "https://github.com/jyotirsai",
      icon: <GitHub />,
    },
    {
      link: "mailto:jyotirsai@gmail.com",
      icon: <Email />,
    },
  ]

  return (
    <Grid container className={classes.header}>
      <Grid item container justify="center" className={classes.introPadding}>
        <Typography variant="h3">Jyotir Sai</Typography>
      </Grid>
      <Grid item container justify="center" className={classes.introPadding}>
        <Typography variant="body1" align="center">
          Hi, I'm an engineering student at the University of Alberta. I like to
          blog about projects I'm working on, things I'm learning, and I
          sometimes make tutorials.
        </Typography>
      </Grid>
      <Grid item container justify="center">
        {contacts.map((contact, key) => (
          <Grid key={key}>
            <Link href={contact.link}>
              <IconButton className={classes.iconStyles}>
                {contact.icon}
              </IconButton>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Divider component="hr" className={classes.dividerStyles} />
    </Grid>
  )
}

export default Header
