import Img from "gatsby-image"
import React from "react"

export default function PhotoCard({ sanityMyImage }) {
  return (
    <Img
      fluid={sanityMyImage.myImage.asset.fluid}
      style={{ boxShadow: `var(--elevation-1)` }}
    />
  )
}
