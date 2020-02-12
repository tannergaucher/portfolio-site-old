import Image from "gatsby-image"
import React from "react"
import { useAvatarImage } from "../hooks"

export default function avatar() {
  const { fixed } = useAvatarImage()

  return <Image fixed={fixed} />
}
