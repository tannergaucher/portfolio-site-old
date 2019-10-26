import React from "react"
import Img from "gatsby-image"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"
import { useAllMyImages } from "../components/hooks"

export default function Photo() {
  const { edges } = useAllMyImages()

  return (
    <Layout>
      <StyledPage>
        <h1 className="page-title">Photo</h1>
        {edges.map(edge => (
          <Img key={edge.node.id} fluid={edge.node.myImage.asset.fluid} />
        ))}
      </StyledPage>
    </Layout>
  )
}
