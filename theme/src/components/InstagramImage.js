import React from "react"
import styled from "@emotion/styled"

import mq from "../styles/breakpoints"
import COLORS from "../styles/colors"

const InstagramImg = styled.img`
  ${mq({
    margin: "auto",
    border: `0.5px solid ${COLORS.INSTAGRAM.BORDER}`,
    width: "350px",
  })}
`

const InstagramImageWrapper = styled.div`
  ${mq({
    padding: "20px 20px 35px 20px",
    backgroundColor: COLORS.INSTAGRAM.BACKGROUND,
    width: "350px",
    height: "400px",
    boxShadow: `3px 3px 10px -8px ${COLORS.INSTAGRAM.SHADOW}`,
    margin: "20px",
  })}
`

const InstagramImage = ({ src = "", alt = "" }) => (
  <InstagramImageWrapper>
    <InstagramImg alt={alt} src={src} />
  </InstagramImageWrapper>
)

export default InstagramImage
