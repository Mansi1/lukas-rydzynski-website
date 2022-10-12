import React, { useCallback } from "react"
import { Stack } from "@mui/material"
import { IMPRESS_ROUTE, MAIN_CONTACT_HASH } from "../routes"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import { getNsTrans } from "../functions/getNsTrans"
import { useNavigate } from "react-router-dom"
import { Theme } from "@mui/system"
import {
  CITY,
  EMAIL,
  LANGUAGE_ENGLISH_FEATURE_KEY,
  MOBILE,
  NAME,
  STREET,
} from "../variables"
import { useMedia } from "../hooks/useMedia"
import { FeatureToggle } from "./FeatureToggle"

const Trans = getNsTrans("footer")

const useStyle = makeStyles(({ palette, spacing }: Theme) => ({
  root: {
    backgroundColor: palette.primary.main,
    padding: spacing(5),
    color: "#fff",
  },
  name: { fontWeight: "bold", fontSize: 18 },
  privacyAndImpress: { textAlign: "center", fontSize: 12 },
  contactMobile: { textAlign: "center" },
  contactTabletDesktop: { margin: "auto" },
  contactHeader: {
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    color: "#fff",
  },
  languageSwitch: {
    justifyContent: "center",
  },
  switch: {
    cursor: "pointer",
  },
}))

export const Footer = () => {
  const classes = useStyle()
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const changeLanguageClick = useCallback(
    (lng: "en" | "de") => {
      i18n.changeLanguage(lng)
    },
    [i18n],
  )
  const { mobile } = useMedia()
  return (
    <div className={classes.root}>
      <Stack spacing={4} direction={"column"}>
        <Stack
          spacing={2}
          direction={"column"}
          className={
            mobile ? classes.contactMobile : classes.contactTabletDesktop
          }
        >
          <div id={MAIN_CONTACT_HASH} className={classes.contactHeader}>
            <Trans>Kontakt</Trans>
          </div>
          <Stack spacing={4} direction={mobile ? "column" : "row"}>
            <div>
              <div className={classes.name}>{NAME}</div>

              <div>{STREET}</div>

              <div>{CITY}</div>
            </div>
            <div>
              <div>
                <a href={`tel:${MOBILE}`} className={classes.link}>
                  Mobile: {MOBILE}
                </a>
              </div>
              <div>
                <a href={`mailto:${EMAIL}`} className={classes.link}>
                  {EMAIL}
                </a>
              </div>
            </div>
          </Stack>
        </Stack>
        <div className={classes.privacyAndImpress}>
          <a onClick={() => navigate(IMPRESS_ROUTE)} className={classes.link}>
            <Trans>Impressum & Datenschutz</Trans>
          </a>
        </div>
        <FeatureToggle storageKey={LANGUAGE_ENGLISH_FEATURE_KEY}>
          <Stack
            spacing={2}
            direction={"row"}
            className={classes.languageSwitch}
          >
            <span
              className={classes.switch}
              onClick={() => changeLanguageClick("de")}
            >
              DE
            </span>
            <span>|</span>
            <span
              className={classes.switch}
              onClick={() => changeLanguageClick("en")}
            >
              EN
            </span>
          </Stack>
        </FeatureToggle>
      </Stack>
    </div>
  )
}
