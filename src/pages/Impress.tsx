import React from "react"
import { PageLayout } from "../components/PageLayout"
import { makeStyles } from "@mui/styles"
import { getNsTrans } from "../functions/getNsTrans"
import { Theme } from "@mui/material"

const Trans = getNsTrans("impress-and-privacy")

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    textAlign: "center",
    maxWidth: 360,
    margin: "auto",
    color: palette.primary.main,
  },
}))

export const ImpressPage = () => {
  const classes = useStyle()

  return (
    <PageLayout>
      <div className={classes.root}>
        <h2>
          <Trans>Impressum & Datenschutz</Trans>
        </h2>
        <h3>Angaben Gemäß § 5 TMG:</h3>
        <p>Büro für Deutsche Vermögensberatung Lukas Rydzynski</p>
        <h3>Postanschrift:</h3>
        <p>Prangstraße 19 94437 Mamming</p>
        <h3>Kontakt</h3>
        <p>Telefon: 0049 9951 30 90 870</p>
        <p>Mobil: 0049 157 78 70 70 79</p>
        <p>Telefax: 0049 9955 93 39 771</p>
        <p>E-Mail: lukas.rydzynski@deinvermögensberater.com</p>
        <h3>Aufsichtsbehörde</h3>
        <p>
          Erlaubnis- und Aufsichtsbehörde gemäß § 34c GewO: IHK für München u.
          Oberbayern, Max Joseph-Str. 2, 80333 München Registerstelle für § 34d
          GewO: Deutscher Industrie- und Handelskammertag (DIHK) e. V. Breite
          Straße 29, 10178 Berlin, Telefon 0180 600585-0 (20 Cent/Anruf aus dem
          deutschen Festnetz, höchstens 60 Cent/Anruf aus Mobilfunknetzen)
          www.vermittlerregister.info
        </p>
        <h3>Hinweise zur Webseite:</h3>
        <p>Information gemäß § 36 VSBG</p>
        <p>
          Gemäß § 36 VSBG
          <br />
          <br />
          (Verbraucherstreitbeilegungsgesetz - Gesetz über die alternative
          Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser
          Website:
          <br />
          <br />
          Wir sind verpflichtet, an Streitbeilegungsverfahren bei der folgenden
          Verbraucherschlichtungsstelle teilzunehmen:
          <br />
          <br />
          Verein Versicherungsombudsmann e. V. Postfach 080632, 10006 Berlin
          Ombudsmann Private Kranken- und Pflegeversicherung Postfach 060222,
          10052 Berlin www.versicherungsombudsmann.de, www.pkv-ombudsmann.de
          <br />
          Das Impressum wurde mit dem Impressums Generator der activeMind AG
          erstellt.
        </p>
      </div>
    </PageLayout>
  )
}

export default ImpressPage
