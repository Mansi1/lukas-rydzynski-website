import React from "react"
import { PageLayout } from "../../components/PageLayout"
import { makeStyles } from "@mui/styles"
import { Button, Theme } from "@mui/material"
import { getNsTrans } from "../../functions/getNsTrans"
import { WhatIsImportant } from "./WhatIsImportant"
import { AboutMe } from "./AboutMe"
import { Menu } from "./Menu"
import { MyPromise } from "./MyPromise"
import { ConsultingConcept } from "./ConsultingConcept"

const Trans = getNsTrans("main")

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
          <div>
            <p>
              <Trans>
                Damit Sie sich aufs Wesentliche konzentrieren können:
              </Trans>
              <span> </span>
              <Trans>Leben</Trans>
              <span> </span>
              <Trans>Familie</Trans>
              <span> </span>
              <Trans>Hobbies</Trans>
              <span> </span>
              <Trans>Beruf</Trans>
            </p>
            <p>
              <Trans>
                Mein ganzheitlicher Ansatz für die Vermögensverwaltung stellt
                sicher, dass Ihre persönliche und berufliche Situation bei der
                Entwicklung der passenden Strategie für Ihr Vermögen
                berücksichtigt wird.
              </Trans>
            </p>
          </div>
          <AboutMe />

          <div>
            <h2>
              <Trans>Ich arbeite für Ihre Zukunft</Trans>
            </h2>
            <p>
              <Trans>
                Ich helfe Ihnen dabei, mehr aus Ihrem Geld zu machen, angepasst
                an Ihre individuellen Wünsche und Ziele - zuverlässig,
                effizient, Schritt für Schritt.
              </Trans>
            </p>
            <p>
              <Trans>
                Was für Sie zählt, zählt auch für mich. Deshalb befasse ich mich
                umfassend mit Ihrer Situation und Ihren finanziellen,
                geschäftlichen und persönlichen Zielen.
              </Trans>
            </p>
            <p>
              <Trans>
                Jede Situation ist individuell. Gegenseitiges Vertrauen ist die
                Basis für eine langfristige Partnerschaft. Aus diesem Grund
                steckt viel Herzblut und Verständnis bei all meinen Handlungen.
              </Trans>
            </p>
            <Button variant="outlined">
              <Trans>Jetzt Kontakt aufnehmen</Trans>
            </Button>
          </div>
          <MyPromise />
          <ConsultingConcept />
          <div>
            <p>
              <Trans>
                Jeder Kunde ist anders. Gemeinsam entwickle ich mit Ihnen ein
                passgenaues Konzept. So haben Sie die Gewissheit, dass Ihre
                Verträge aufeinander abgestimmt sind und Sie kein Geld
                verschenken.
              </Trans>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
