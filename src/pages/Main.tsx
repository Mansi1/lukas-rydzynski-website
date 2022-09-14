import React, { useCallback } from "react"
import { PageLayout } from "../components/PageLayout"
import { makeStyles } from "@mui/styles"
import { Button, Stack, Theme } from "@mui/material"
import { getNsTrans } from "../functions/getNsTrans"
import { useTranslation } from "react-i18next"

const Trans = getNsTrans("main")

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    textAlign: "center",
  },
  languageSwitch: {
    justifyContent: "center",
    marginTop: 30,
  },
  switch: {
    cursor: "pointer",
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

  const { i18n } = useTranslation()
  const changeLanguageClick = useCallback(
    (lng: "en" | "de") => {
      i18n.changeLanguage(lng)
    },
    [i18n],
  )

  return (
    <PageLayout>
      <div className={classes.root}>
        <div>
          <div>
            <h2>
              <Trans>Was ist Ihnen wichtig?</Trans>
            </h2>
            <p>
              <Trans>
                Jeder Mensch hat seine eigenen Träume, Hoffnungen und Ziele. Ich
                helfe Ihnen dabei, Ihre Wünsche zu verwirklichen und finanzielle
                Ziele zu erreichen.
              </Trans>
            </p>
            <Button variant="outlined">
              <Trans>Jetzt Beratungstermin vereinbaren</Trans>
            </Button>
          </div>
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
          <div>
            <h2>
              <Trans>Über mich</Trans>
            </h2>
            <p>
              <Trans>
                Meine Arbeit ist meine Leidenschaft. Dabei liegen mir in erster
                Linie die Wünsche und Interessen meiner Kunden am Herzen. Jede
                Situation ist individuell - daher gehe ich sie mit Herz und
                Verständnis an!
              </Trans>
            </p>
            <div>Lukas Rydzynski</div>
          </div>
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
          <div>
            <h2>
              <Trans>Mein Versprechen</Trans>
            </h2>
            <p>
              <Trans>
                Auffinden von optimalen Kreditkonditionen, individuelle
                Anpassung eines Angebots, breite Möglichkeiten des
                Finanzmanagements oder schließlich der endgültige Abschluss
                einer Transaktion geben mir nicht nur große Zufriedenheit,
                sondern bestätigen mich darin, etwas Sinnvolles zu tun!
              </Trans>
            </p>
            <p>
              <Trans>
                Dank meiner Kunden habe ich das Vergnügen, die Welt neu zu
                entdecken. Ich schätze die Möglichkeit, an der Verwirklichung
                ihrer Wünsche und Umsetzung konkreter Pläne mitwirken zu können,
                sehr - seien es private, Lebens- aber auch berufliche Pläne.
              </Trans>
            </p>
            <p>
              <Trans>
                Zusammenarbeit nach den Prinzipien des gegenseitigen Respekts,
                Achtung von Werten sowie eine individuelle Herangehensweise sind
                die wichtigsten Elemente, die mich bei der Erfüllung meiner
                beruflichen Tätigkeit leiten.
              </Trans>
            </p>
            <p>
              <Trans>Nehmen Sie gerne Kontakt mit mir auf.</Trans>
            </p>
          </div>
          <div>
            <h2>
              <Trans>Beratungskonzept</Trans>
            </h2>
            <p>
              <Trans>
                Ziel der Zusammenarbeit mit meinen Kunden ist gegenseitiges
                Vertrauen: Ich bin erfolgreich, wenn Sie erfolgreich sind. Auf
                diesem Aspekt basiert mein Handeln. Dabei geht es um
                langfristige Zusammenarbeit. Deshalb steht Transparenz und
                Ehrlichkeit an erster Stelle.
              </Trans>
            </p>
            <p>
              <Trans>
                Wie beginnt eine gute Beratung? Mit den richtigen Fragen und mit
                Zuhören! Am Anfang steht immer der Kunde mit seinen ganz
                persönlichen Zielen, Möglichkeiten und vorhandenen Verträgen.
                Darauf aufbauend entwickle ich ein passgenaues Konzept für
                Vorsorge, Absicherung, Vermögensaufbau und alle anderen
                finanziellen Fragestellungen. Erst dann geht es um die richtigen
                Produkte, die Ihre Ziele erreichbar werden lassen. Ich verstehe
                mich als lebenslanger Begleiter meiner Kunden, wenn es um deren
                Finanzen geht.
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
                  <Trans>
                    Auswertung und Vermögensplanung mit Qualitätssiegel
                  </Trans>
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
        <div>
          <h2>
            <Trans>Kontakt</Trans>
          </h2>
          <div>
            <div>
              <div>Lukas Rydzynski</div>

              <div>Prangstraße 19</div>

              <div>94437 Mamming</div>

              <div>Tel +49 9951 30 90 870</div>

              <div>Mobil +49 1577 870 70 79</div>

              <div>lukas.rydzynski @deinvermögensberater.com</div>
            </div>
          </div>
        </div>

        <Stack spacing={2} direction={"row"} className={classes.languageSwitch}>
          <span
            className={classes.switch}
            onClick={() => changeLanguageClick("en")}
          >
            EN
          </span>
          <span>|</span>
          <span
            className={classes.switch}
            onClick={() => changeLanguageClick("de")}
          >
            DE
          </span>
        </Stack>
        <div className={classes.spacer} />
      </div>
    </PageLayout>
  )
}
