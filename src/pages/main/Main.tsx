import React from "react"
import { PageLayout } from "../../components/PageLayout"
import { makeStyles } from "@mui/styles"
import { WhatIsImportant } from "./WhatIsImportant"
import { AboutMe } from "./AboutMe"
import { Menu } from "./Menu"
import { MyPromise } from "./MyPromise"
import { ConsultingConcept } from "./ConsultingConcept"
import { Essential } from "./Essential"
import { Individuality } from "./Individuality"
import { ForYourFuture } from "./ForYourFuture"
import backgroundImage from "../../assets/img/my-promise.jpeg"
import { FastContact } from "./FastContact"

const useStyle = makeStyles({
  root: {
    textAlign: "center",
  },
  imageWrapper: {
    marginLeft: -16,
    marginRight: -16,
    marginBottom: 80,
    marginTop: 80,
  },
  image: {
    width: "100%",
    backgroundImage: `url(${backgroundImage})`,
    minHeight: 350,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "grid",
    placeItems: "center",
  },
})

export const MainPage = () => {
  const classes = useStyle()

  return (
    <PageLayout>
      <Menu />
      <div className={classes.root}>
        <div>
          <FastContact />
          <WhatIsImportant />
          <Essential />
          <AboutMe />

          <ForYourFuture />
          <div className={classes.imageWrapper}>
            <div className={classes.image} />
          </div>

          <MyPromise />
          <ConsultingConcept />
          <Individuality />
        </div>
      </div>
    </PageLayout>
  )
}

export default MainPage
