import React from "react"
import { Button } from "@mui/material"
import { getNsTrans } from "../../functions/getNsTrans"
import backgroundImage from "../../assets/img/what-is-important.jpeg"
import { useMedia } from "../../hooks/useMedia"
import { FeatureToggle } from "../../components/FeatureToggle"
import { ARRANGE_APPOINTMENT_FEATURE_KEY } from "../../variables"

import { makeStyles } from "@mui/styles"
import { joinClasses } from "@milkscout/react"
import { Theme } from "@mui/system"
import { Divider } from "../../components/Divider"

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    height: "100%",
    backgroundImage: `url(${backgroundImage})`,
    color: "#fff",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "grid",
    placeItems: "center",
    marginRight: -24,
    marginLeft: -24,
  },
  rootMobile: {
    marginRight: -16,
    marginLeft: -16,
  },
  content: {
    maxWidth: 450,
    paddingTop: 150,
    paddingBottom: 150,
    paddingRight: 24,
    paddingLeft: 24,
  },
  contentMobile: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  textHeader: { marginBottom: 350, textShadow: "2px 2px #000" },
  text: { marginBottom: 50, fontSize: 22, textShadow: "2px 2px #000" },
  button: {
    color: "#fff",
    borderColor: "#fff !important",
    fontSize: 18,
    textShadow: "2px 2px #000",
  },
  divider: {
    borderTop: "5px solid " + palette.secondary.main,
    minWidth: 250,
    marginBottom: 20,
  },
}))
const Trans = getNsTrans("what-is-important")

export const WhatIsImportant = () => {
  const { mobile } = useMedia()
  const classes = useStyle()
  return (
    <div
      className={joinClasses({
        [classes.root]: true,
        [classes.rootMobile]: mobile,
      })}
    >
      <div
        className={joinClasses({
          [classes.content]: true,
          [classes.contentMobile]: mobile,
        })}
      >
        <h2 className={classes.textHeader}>
          <Trans>Was ist Ihnen wichtig?</Trans>
        </h2>
        <p className={classes.text}>
          <Trans>
            Jeder Mensch hat seine eigenen Träume, Hoffnungen und Ziele. Ich
            helfe Ihnen dabei, Ihre Wünsche zu verwirklichen und finanzielle
            Ziele zu erreichen.
          </Trans>
        </p>
        <FeatureToggle storageKey={ARRANGE_APPOINTMENT_FEATURE_KEY}>
          <Button variant="outlined" size={"large"} className={classes.button}>
            <Trans>Jetzt Beratungstermin vereinbaren</Trans>
          </Button>
        </FeatureToggle>
      </div>
      <Divider variant={"secondary"} />
    </div>
  )
}
