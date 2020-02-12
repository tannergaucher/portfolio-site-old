import { Layout, SEO } from "../components"

import React from "react"
import { useAllPosts } from "../hooks"

export default function PostsPage({ location }) {
  const { edges } = useAllPosts()

  return (
    <Layout location={location}>
      {/*  */}
      {/*  */}
    </Layout>
  )
}
