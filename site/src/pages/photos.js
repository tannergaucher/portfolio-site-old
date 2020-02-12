import { Layout, SEO } from "../components"

import React from "react"
import { useAllMyImages } from "../hooks"

export default function PhotosPage({ location }) {
  const { edges } = useAllMyImages()

  return (
    <Layout location={location}>
      <SEO title="Photos" />
      {/*  */}
    </Layout>
  )
}
