import React from "react"

import { Layout } from "../components/elements"
import { Posts } from "../components/post"
import { StyledPage } from "../components/styles"

export default function PostsPage() {
  return (
    <Layout>
      <StyledPage>
        <h1 className="page-title">Posts</h1>
        <Posts />
      </StyledPage>
    </Layout>
  )
}
