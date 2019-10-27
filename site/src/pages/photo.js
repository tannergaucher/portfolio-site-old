import React from "react"

import { Layout } from "../components/elements"
import { PhotoCard } from "../components/photo"
import { useAllMyImages } from "../components/hooks"
import { StyledPage, Link } from "../components/styles"

export default function Photo() {
  const { edges } = useAllMyImages()

  return (
    <Layout>
      <StyledPage>
        <h1 className="page-title">Photo</h1>
        {edges.map(edge => (
          <Link to={`/photo/${edge.node.slug.current}`}>
            <PhotoCard key={edge.node.id} sanityMyImage={edge.node} />
          </Link>
        ))}
      </StyledPage>
    </Layout>
  )
}
