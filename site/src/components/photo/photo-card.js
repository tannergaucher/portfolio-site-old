import React from "react"
import Img from "gatsby-image"

export default function PhotoCard({ sanityMyImage }) {
  return <Img fluid={sanityMyImage.myImage.asset.fluid} />
}
