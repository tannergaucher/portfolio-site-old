import { ContentGrid, Link, StyledPage } from "../components/styles"
import { Layout, SEO } from "../components/elements"

import { PhotoCard } from "../components/photo"
import React from "react"
import { useAllMyImages } from "../components/hooks"

export default function PhotosPage({ location }) {
  const { edges } = useAllMyImages()

  return (
    <Layout location={location}>
      <SEO title="Photos" />
      <ContentGrid>
        {edges.map(edge => (
          <Link to={`/photo/${edge.node.slug.current}`} key={edge.node.id}>
            <PhotoCard
              sanityMyImage={edge.node}
              next={edge.next}
              previous={edge.previous}
            />
          </Link>
        ))}
      </ContentGrid>
    </Layout>
  )
}
