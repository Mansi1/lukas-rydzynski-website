import React, { useCallback } from "react"
import { Stack } from "@mui/material"
import { IMPRESS_ROUTE, MAIN_CONTACT_HASH } from "../routes"
import { makeStyles } from "@mui/styles"
import { useTranslation } from "react-i18next"
import { getNsTrans } from "../functions/getNsTrans"
import { useNavigate } from "react-router-dom"
import { Theme } from "@mui/system"
import { EMAIL, MOBILE, PHONE } from "../variables"
import { useMedia } from "../hooks/useMedia"

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
              <div className={classes.name}>Lukas Rydzynski</div>

              <div>Prangstraße 19</div>

              <div>94437 Mamming</div>
            </div>
            <div>
              <div>
                <a href={`tel:${PHONE}`} className={classes.link}>
                  Tel: {PHONE}
                </a>
              </div>
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
      </Stack>
    </div>
  )
}
