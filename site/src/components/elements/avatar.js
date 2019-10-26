import React from "react"
import Image from "gatsby-image"

import { useAvatarImage } from "../hooks"

export default function avatar() {
  const { fixed } = useAvatarImage()

  return <Image fixed={fixed} imgStyle={{ borderRadius: `50%` }} />
}
