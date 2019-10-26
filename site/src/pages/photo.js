import React from "react"
import { Link } from "gatsby"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"
import { useAllMyImages } from "../components/hooks"
import { PhotoCard } from "../components/photo"

export default function Photo() {
  const { edges } = useAllMyImages()

  return (
    <Layout>
      <StyledPage>
        <h1 className="page-title">Photo</h1>
        {edges.map(edge => (
          <Link
            to={`/photo/${edge.node.slug.current}`}
            style={{ textDecoration: `none`, color: `inherit` }}
          >
            <PhotoCard key={edge.node.id} sanityMyImage={edge.node} />
          </Link>
        ))}
      </StyledPage>
    </Layout>
  )
}
