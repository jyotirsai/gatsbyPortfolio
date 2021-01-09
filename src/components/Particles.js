import React from "react"
import ParticleField from "react-particles-webgl"

export default function Particles() {
  const config = {
    showCube: false,
    dimension: "3D",
    velocity: 1,
    boundaryType: "passthru",
    antialias: false,
    direction: {
      xMin: -0.1,
      xMax: 0.1,
      yMin: -0.9,
      yMax: 0.1,
      zMin: 0,
      zMax: 0,
    },
    lines: {
      colorMode: "rainbow",
      color: "#351CCB",
      transparency: 0.6,
      limitConnections: true,
      maxConnections: 20,
      minDistance: 150,
      visible: false,
    },
    particles: {
      colorMode: "solid",
      color: "#ffffff",
      transparency: 0.5,
      shape: "circle",
      boundingBox: "canvas",
      count: 1000,
      minSize: 3,
      maxSize: 32,
      visible: true,
    },
    cameraControls: {
      enabled: true,
      enableDamping: true,
      dampingFactor: 0.15,
      enableZoom: true,
      autoRotate: false,
      autoRotateSpeed: 0.3,
      resetCameraFlag: true,
    },
  }
  return <ParticleField config={config} />
}