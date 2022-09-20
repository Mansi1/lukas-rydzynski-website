import { getNsTrans } from "../../functions/getNsTrans"
import React from "react"
import { Stack, Theme } from "@mui/material"
import { MAIN_CONSULTING_CONCEPT_HASH } from "../../routes"
import { makeStyles } from "@mui/styles"

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    backgroundColor: palette.primary.main,
    paddingTop: 60,
    paddingBottom: 60,
    color: "#fff",
  },
  wrapper: {
    maxWidth: 450,
    margin: "auto",
  },
}))
const Trans = getNsTrans("main")
export const ConsultingConcept = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
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
        <h2>
          <Trans>5 Schritte für eine Vertrauensvolle Partnerschaft</Trans>
        </h2>
        <Stack direction="column" spacing={2}>
          <div>
            <div>
              <Trans>1. Analyse</Trans>
            </div>
            <div>
              <Trans>
                Erfassen der ist Situation mit ihren Wünschen und Zielen
              </Trans>
            </div>
          </div>
          <div>
            <div>
              <Trans>2. Planung</Trans>
            </div>
            <div>
              <Trans>Auswertung und Vermögensplanung mit Qualitätssiegel</Trans>
            </div>
          </div>
          <div>
            <div>
              <Trans>3. Beratung</Trans>
            </div>
            <div>
              <Trans>
                Persönliche Beratung, abgestimmt auf Ihre Wünsche und Ziele
              </Trans>
            </div>
          </div>
          <div>
            <div>
              <Trans>4. Umsetzung</Trans>
            </div>
            <div>
              <Trans>Realisierung Ihrer Vermögensplanung</Trans>
            </div>
          </div>
          <div>
            <div>
              <Trans>5. Partnerschaft</Trans>
            </div>
            <div>
              <Trans>Langfristige Partnerschaft</Trans>
            </div>
          </div>
        </Stack>
      </div>
    </div>
  )
}
