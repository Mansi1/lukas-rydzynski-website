import React, { ReactNode, useLayoutEffect, useState } from "react"
import { NotProductionValues } from "@milkscout/react"
import { getNsTrans } from "../../functions/getNsTrans"
import { makeStyles } from "@mui/styles"
import { Theme } from "@mui/material"
import { Divider } from "../../components/Divider"

const Trans = getNsTrans("essentails")

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    maxWidth: 450,
    margin: "auto",
    marginTop: 80,
    marginBottom: 80,
  },
  header: { color: palette.primary.main },
  essential: { color: palette.secondary.main },
  content: {
    paddingTop: 30,
    color: palette.primary.main,
  },
}))
const ESSENTIALS_ARRAY: Array<ReactNode> = [
  <Trans>Leben</Trans>,
  <Trans>Familie</Trans>,
  <Trans>Hobbies</Trans>,
  <Trans>Beruf</Trans>,
  <Trans>Reisen</Trans>,
]
const getRandomNumber = () => {
  return Math.floor(Math.random() * ESSENTIALS_ARRAY.length)
}
export const Essential = () => {
  const [essential, setEssential] = useState<number>(getRandomNumber())
  const classes = useStyle()

  useLayoutEffect(() => {
    const intervalListener = () => {
      setEssential(getRandomNumber())
    }
    const interval = setInterval(intervalListener, 2500)
    return () => clearInterval(interval)
  }, [setEssential])

  const essentialEl = ESSENTIALS_ARRAY[essential]

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>
        <Trans>Damit Sie sich aufs Wesentliche konzentrieren können:</Trans>
        <br />
        <span className={classes.essential}>{essentialEl}</span>
      </h2>
      <Divider />
      <p className={classes.content}>
        <Trans>
          Mein ganzheitlicher Ansatz für die Vermögensverwaltung stellt sicher,
          dass Ihre persönliche und berufliche Situation bei der Entwicklung der
          passenden Strategie für Ihr Vermögen berücksichtigt wird.
        </Trans>
      </p>
      <NotProductionValues nodes={ESSENTIALS_ARRAY} />
    </div>
  )
}
