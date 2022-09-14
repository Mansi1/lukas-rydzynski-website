import React, { useCallback } from "react"
import { PageLayout } from "../components/PageLayout"
import { makeStyles } from "@mui/styles"
import { Stack, Theme, useTheme } from "@mui/material"
import { getNsTrans } from "../functions/getNsTrans"
import { useTranslation } from "react-i18next"

const Trans = getNsTrans("main")

const useStyle = makeStyles(({ palette }: Theme) => ({
  imageWrapper: {
    textAlign: "center",
  },
  image: {
    animation: "$rotation 3s infinite linear",
  },
  "@keyframes rotation": {
    "100%": { transform: "rotatey(360deg)" },
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
  const {
    typography: { fontFamily },
  } = useTheme()
  const { i18n } = useTranslation()
  const changeLanguageClick = useCallback(
    (lng: "en" | "de") => {
      i18n.changeLanguage(lng)
    },
    [i18n],
  )

  return (
    <PageLayout>
      <div className={classes.imageWrapper}>
        <h1>
          <Trans>Lukas Rydzynski's website</Trans>
        </h1>
        <h2>
          <Trans>Investment advice</Trans>
        </h2>
        <Stack direction={"column"} spacing={2}>
          <div className={classes.text}>
            <Trans>Font name</Trans>
            <span>: {fontFamily}</span>
          </div>
          <div className={classes.primary}>
            <Trans>Primary color</Trans>
          </div>
          <div className={classes.secondary}>
            <Trans>Secondary color</Trans>
          </div>
        </Stack>
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
