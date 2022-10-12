import React from "react"
import { Button, Theme } from "@mui/material"
import { getNsTrans } from "../../functions/getNsTrans"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"
import { MAIN_CONTACT_HASH } from "../../routes"
import { navigateToId } from "../../functions/navigateToId"

const Trans = getNsTrans("future")
const useStyle = makeStyles(({}: Theme) => ({
  root: {
    maxWidth: 450,
    margin: "auto",
  },
}))

export const ForYourFuture = () => {
  const classes = useStyle()
  const navigate = useNavigate()

  const moveToElement = navigateToId(navigate)

  return (
    <div className={classes.root}>
      <h2>
        <Trans>Ich arbeite für Ihre Zukunft</Trans>
      </h2>
      <p>
        <Trans>
          Ich helfe Ihnen dabei, mehr aus Ihrem Geld zu machen, angepasst an
          Ihre individuellen Wünsche und Ziele - zuverlässig, effizient, Schritt
          für Schritt.
        </Trans>
      </p>
      <p>
        <Trans>
          Was für Sie zählt, zählt auch für mich. Deshalb befasse ich mich
          umfassend mit Ihrer Situation und Ihren finanziellen, geschäftlichen
          und persönlichen Zielen.
        </Trans>
      </p>
      <p>
        <Trans>
          Jede Situation ist individuell. Gegenseitiges Vertrauen ist die Basis
          für eine langfristige Partnerschaft. Aus diesem Grund steckt viel
          Herzblut und Verständnis bei all meinen Handlungen.
        </Trans>
      </p>
      <Button
        variant="outlined"
        onClick={() => moveToElement(MAIN_CONTACT_HASH)}
      >
        <Trans>Jetzt Kontakt aufnehmen</Trans>
      </Button>
    </div>
  )
}
