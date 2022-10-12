import { getNsTrans } from "../../functions/getNsTrans"
import React from "react"
import { Stack, Theme } from "@mui/material"
import { MAIN_CONSULTING_CONCEPT_HASH } from "../../routes"

import { makeStyles } from "@mui/styles"
import { useMedia } from "../../hooks/useMedia"
import { joinClasses } from "@milkscout/react"

const Trans = getNsTrans("consulting-concept")

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    fontWeight: 500,
    backgroundColor: palette.primary.main,
    paddingTop: 60 + 24,
    paddingBottom: 60 + 24,
    paddingLeft: 24,
    paddingRight: 24,
    marginLeft: -24,
    marginRight: -24,
    color: "#fff",
  },
  rootMobile: {
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: -16,
    marginRight: -16,
  },
  wrapper: {
    maxWidth: 450,
    margin: "auto",
  },
  rootStep: {
    fontFamily: "Raleway",
    paddingLeft: 50,
    paddingRight: 50,
  },
  step: {
    color: palette.secondary.main,
    fontSize: 25,
  },
  stepDesc: {
    fontSize: 18,
  },
  divider: {
    borderTop: "3px solid #fff",
    maxWidth: 250,
    margin: "auto",
    marginBottom: 60,
    marginTop: 60,
  },
}))
export const ConsultingConcept = () => {
  const classes = useStyle()
  const { mobile } = useMedia()
  return (
    <div
      className={joinClasses({
        [classes.root]: true,
        [classes.rootMobile]: mobile,
      })}
    >
      <div className={classes.wrapper}>
        <h2 id={MAIN_CONSULTING_CONCEPT_HASH}>
          <Trans>Beratungskonzept</Trans>
        </h2>
        <p>
          <Trans>
            Ziel der Zusammenarbeit mit meinen Kunden ist gegenseitiges
            Vertrauen: Ich bin erfolgreich, wenn Sie erfolgreich sind. Auf
            diesem Aspekt basiert mein Handeln. Dabei geht es um langfristige
            Zusammenarbeit. Deshalb steht Transparenz und Ehrlichkeit an erster
            Stelle.
          </Trans>
        </p>
        <p>
          <Trans>
            Wie beginnt eine gute Beratung? Mit den richtigen Fragen und mit
            Zuhören! Am Anfang steht immer der Kunde mit seinen ganz
            persönlichen Zielen, Möglichkeiten und vorhandenen Verträgen. Darauf
            aufbauend entwickle ich ein passgenaues Konzept für Vorsorge,
            Absicherung, Vermögensaufbau und alle anderen finanziellen
            Fragestellungen. Erst dann geht es um die richtigen Produkte, die
            Ihre Ziele erreichbar werden lassen. Ich verstehe mich als
            lebenslanger Begleiter meiner Kunden, wenn es um deren Finanzen
            geht.
          </Trans>
        </p>
        <div className={classes.divider} />
        <h2>
          <Trans>5 Schritte für eine Vertrauensvolle Partnerschaft</Trans>
        </h2>
        <Stack direction="column" spacing={2} className={classes.rootStep}>
          <div>
            <div className={classes.step}>
              1. <Trans>Analyse</Trans>
            </div>
            <div className={classes.stepDesc}>
              <Trans>
                Erfassen der ist Situation mit ihren Wünschen und Zielen
              </Trans>
            </div>
          </div>
          <div>
            <div className={classes.step}>
              2. <Trans>Planung</Trans>
            </div>
            <div className={classes.stepDesc}>
              <Trans>Auswertung und Vermögensplanung mit Qualitätssiegel</Trans>
            </div>
          </div>
          <div>
            <div className={classes.step}>
              3. <Trans>Beratung</Trans>
            </div>
            <div className={classes.stepDesc}>
              <Trans>
                Persönliche Beratung, abgestimmt auf Ihre Wünsche und Ziele
              </Trans>
            </div>
          </div>
          <div>
            <div className={classes.step}>
              4. <Trans>Umsetzung</Trans>
            </div>
            <div className={classes.stepDesc}>
              <Trans>Realisierung Ihrer Vermögensplanung</Trans>
            </div>
          </div>
          <div>
            <div className={classes.step}>
              5. <Trans>Partnerschaft</Trans>
            </div>
            <div className={classes.stepDesc}>
              <Trans>Langfristige Partnerschaft</Trans>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  )
}
