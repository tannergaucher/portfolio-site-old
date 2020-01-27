import React from "react"

import { SEO, Layout } from "../components/elements"
import { PhotoCard } from "../components/photo"
import { useAllMyImages } from "../components/hooks"
import { StyledPage, Link, ContentGrid } from "../components/styles"

export default function PhotosPage({ location }) {
  const { edges } = useAllMyImages()

  return (
    <Layout location={location}>
      <SEO title="Photos" />
      <StyledPage>
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
      </StyledPage>
    </Layout>
  )
}
