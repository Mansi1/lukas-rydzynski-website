import React from "react"
import { PageLayout } from "../../components/PageLayout"
import { makeStyles } from "@mui/styles"
import { Theme } from "@mui/material"
import { WhatIsImportant } from "./WhatIsImportant"
import { AboutMe } from "./AboutMe"
import { Menu } from "./Menu"
import { MyPromise } from "./MyPromise"
import { ConsultingConcept } from "./ConsultingConcept"
import { Essential } from "./Essential"
import { Individuality } from "./Individuality"
import { ForYourFuture } from "./ForYourFuture"

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    textAlign: "center",
  },
  spacer: {
    height: 80,
  },
  text: { fontWeight: "bold", fontSize: 18 },
  primary: {
    fontWeight: "bold",
    fontSize: 18,
    color: palette.primary.main,
  },
  secondary: {
    fontWeight: "bold",
    fontSize: 18,
    color: palette.secondary.main,
  },
}))

export const MainPage = () => {
  const classes = useStyle()

  return (
    <PageLayout>
      <Menu />
      <div className={classes.root}>
        <div>
          <WhatIsImportant />
          <Essential />
          <AboutMe />

          <ForYourFuture />
          <MyPromise />
          <ConsultingConcept />
          <Individuality />
        </div>
      </div>
    </PageLayout>
  )
}

export default MainPage
