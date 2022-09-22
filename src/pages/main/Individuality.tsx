import React from "react"
import { FormatQuoteOpenIcon } from "@mui-extra/icons/FormatQuoteOpenIcon"
import { getNsTrans } from "../../functions/getNsTrans"
const Trans = getNsTrans("individuality")
import { makeStyles } from "@mui/styles"
import { Theme } from "@mui/material"

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    marginTop: 50,
    marginBottom: 50,
  },
  icon: { height: 150, fontSize: 150, color: palette.primary.main },
  text: {
    maxWidth: 450,
    fontSize: 28,
    margin: "auto",
    fontFamily: "Caveat",
    color: palette.primary.main,
  },
}))
export const Individuality = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <FormatQuoteOpenIcon className={classes.icon} />
      <p className={classes.text}>
        <Trans>
          Jeder Kunde ist <b>anders</b>. Gemeinsam entwickle ich mit Ihnen ein
          passgenaues Konzept. So haben Sie die Gewissheit, dass Ihre Verträge
          aufeinander abgestimmt sind und Sie <b>kein Geld verschenken</b>.
        </Trans>
      </p>
    </div>
  )
}
