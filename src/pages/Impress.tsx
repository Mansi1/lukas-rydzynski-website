import React from "react"
import { PageLayout } from "../components/PageLayout"
import { makeStyles } from "@mui/styles"
import { getNsTrans } from "../functions/getNsTrans"
import { Theme } from "@mui/material"
import { ADDRESS, EMAIL, MOBILE } from "../variables"

const Trans = getNsTrans("impress-and-privacy")

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    textAlign: "center",
    maxWidth: 360,
    margin: "auto",
    color: palette.primary.main,
  },
  notTranslated: {
    fontSize: 14,
  },
}))

export const ImpressPage = () => {
  const classes = useStyle()

  return (
    <PageLayout>
      <div className={classes.root}>
        <h2>
          <Trans>Impressum & Datenschutz</Trans>
          <div className={classes.notTranslated}>
            <Trans>Dies wird nicht übersetzt</Trans>
          </div>
        </h2>
        <h3>Angaben Gemäß § 5 TMG:</h3>
        <h3>Büro für Deutsche Vermögensberatung</h3>
        <p>
          {ADDRESS}
          <br />
          Mobil: {MOBILE}
          <br />
          E-Mail: {EMAIL}
        </p>
        <p>
          Im Versicherungsbereich als gebundener Vermittler gemäß § 34d Abs. 7
          GewO auf Provisionsbasis ausschließlich vermittelnd und beratend tätig
          für die Generali Deutschland Lebensversicherung, Generali Deutschland
          Versicherung, Generali Deutschland Krankenversicherung, Generali
          Pensionskasse, ADVOCARD Rechtsschutzversicherung. Darüber hinaus
          können in Einzelfällen geldwerte Vorteile in Form von Sachleistungen
          anfallen (z.B. Schulungen sowie Einladungen für die Teilnahme an
          kulturellen und gesellschaftlichen Veranstaltungen,
          Informationsmaterial, Aufmerksamkeiten).
        </p>
        <h3>Schlichtungsstellen</h3>
        <p>
          Verein Versicherungsombudsmann e.V. Postfach 080632, 10006 Berlin
          Ombudsmann Private Kranken- und Pflegeversicherung Postfach 060222,
          10052 Berlin www.versicherungsombudsmann.de, www.pkv-ombudsmann.de
        </p>
        <h3>Erlaubnis- und Aufsichtsbehörde gemäß § 34c GewO</h3>
        <p>IHK für München u. Oberbayern, Max-Joseph-Str. 2, 80333 München</p>
        <p>
          Registerstelle für § 34d GewO: Deutscher Industrie- und
          Handelskammertag (DIHK) e.V. Breite Straße 29, 10178 Berlin, Telefon
          0180 600585-0 (20 Cent/Anruf) www.vermittlerregister.info
          Registernummer nach § 34d GewO: D-SQFC-IEYJS-45
        </p>
        <h3>Haftungshinweis</h3>
        <p>
          Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung
          für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
          sind ausschließlich deren Betreiber verantwortlich. Die
          Vermögensberater nehmen keine Kundengelder entgegen. Zahlungen
          erfolgen direkt von den Kunden an die jeweiligen Produktpartner.
        </p>
        <p>
          Informationen zur Verarbeitung Ihrer personenbezogenen Daten finden
          Sie unter www.datenschutz.dvag.
        </p>
      </div>
    </PageLayout>
  )
}

export default ImpressPage
