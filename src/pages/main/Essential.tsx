import React from "react"
import { NotProductionValues } from "@milkscout/react"
import { getNsTrans } from "../../functions/getNsTrans"
import { makeStyles } from "@mui/styles"
import { Theme } from "@mui/material"
import { Divider } from "../../components/Divider"
import Typed from "react-typed"
import { useTranslation } from "react-i18next"

const i18nNamespace = "essentials"
const Trans = getNsTrans(i18nNamespace)

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

export const Essential = () => {
  const { t } = useTranslation(i18nNamespace)
  const classes = useStyle()

  const ESSENTIALS_ARRAY: Array<string> = [
    t("Leben"),
    t("Familie"),
    t("Hobbies"),
    t("Beruf"),
    t("Reisen"),
  ]

  return (
    <div className={classes.root}>
      <h2 className={classes.header}>
        <Trans>Damit Sie sich aufs Wesentliche konzentrieren können:</Trans>
        <br />
        <span className={classes.essential}>
          <Typed
            strings={ESSENTIALS_ARRAY}
            typeSpeed={80}
            backDelay={2000}
            loop
          />
        </span>
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
