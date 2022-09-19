import { Container } from "@mui/material"
import React, { PropsWithChildren } from "react"
import { makeStyles } from "@mui/styles"
import { MAIN_ROUTE } from "../routes"
import { useNavigate } from "react-router-dom"
import { getNsTrans } from "../functions/getNsTrans"
import { Footer } from "./Footer"

const Trans = getNsTrans("main")

const useStyle = makeStyles({
  root: {
    paddingTop: 24,
    paddingBottom: 24,
  },
})
export const PageLayout = ({ children }: PropsWithChildren<unknown>) => {
  const classes = useStyle()
  const navigate = useNavigate()

  return (
    <>
      <Container maxWidth={"lg"} className={classes.root}>
        <a style={{ textAlign: "center" }} onClick={() => navigate(MAIN_ROUTE)}>
          <h1>
            <Trans>Lukas Rydzynski's Webseite</Trans>
          </h1>
          <h2>
            <Trans>Vermögensberatung</Trans>
          </h2>
        </a>
        {children}
      </Container>
      <Footer />
    </>
  )
}
