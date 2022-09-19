import { Container } from "@mui/material"
import React, { PropsWithChildren } from "react"
import { makeStyles } from "@mui/styles"
import { Footer } from "./Footer"
import { useTheme } from "@mui/system"
import { Header } from "./Header"

const useStyle = makeStyles({
  root: {
    paddingTop: 24,
    paddingBottom: 24,
  },
})
export const PageLayout = ({ children }: PropsWithChildren<unknown>) => {
  const classes = useStyle()
  const { palette } = useTheme()
  return (
    <>
      <style>{`body { background-color: ${palette.background.default}}`}</style>
      <Container maxWidth={"lg"} className={classes.root}>
        <Header />
        {children}
      </Container>
      <Footer />
    </>
  )
}
