import React from "react"
import backgroundStyles from "./Background.module.css"
import Particles from "../Particles"

const Background = ({ children }) => {
  return (
    <div className={backgroundStyles.bgGradient}>
      <div className={backgroundStyles.bgImg}>{children}</div>
      <Particles />
    </div>
  )
}

export default Background
