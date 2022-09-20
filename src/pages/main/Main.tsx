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
import { FormatQuoteOpenIcon } from "@mui-extra/icons/FormatQuoteOpenIcon"
import { Essential } from "./Essential"
import { MAIN_COLOR } from "../../theme/themeOptions"

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
          <Essential />
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
          <div style={{ marginTop: 50, marginBottom: 50 }}>
            <FormatQuoteOpenIcon
              style={{ height: 150, fontSize: 150, color: MAIN_COLOR }}
            />
            <p
              style={{
                maxWidth: 450,
                fontSize: 28,
                margin: "auto",
                fontFamily: "Caveat",
                color: MAIN_COLOR,
              }}
            >
              <Trans>
                Jeder Kunde ist <b>anders</b>. Gemeinsam entwickle ich mit Ihnen
                ein passgenaues Konzept. So haben Sie die Gewissheit, dass Ihre
                Verträge aufeinander abgestimmt sind und Sie{" "}
                <b>kein Geld verschenken</b>.
              </Trans>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
