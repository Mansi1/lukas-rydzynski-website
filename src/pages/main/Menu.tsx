import React, { useCallback } from "react"
import { Stack, Theme } from "@mui/material"
import { useMedia } from "../../hooks/useMedia"
import { useNavigate } from "react-router-dom"
import { makeStyles } from "@mui/styles"

import { getNsTrans } from "../../functions/getNsTrans"
import {
  MAIN_ABOUT_ME_HASH,
  MAIN_CONSULTING_CONCEPT_HASH,
  MAIN_CONTACT_HASH,
  MAIN_MY_PROMISE_HASH,
} from "../../routes"

const Trans = getNsTrans("main")

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: -20,
    marginBottom: 30,
  },
  link: {
    fontFamily: "Italiana",
    cursor: "pointer",
    color: palette.primary.main,
  },
  underline: {
    width: "100%",
    borderTop: "1px solid " + palette.primary.main,
    marginTop: -5,
  },
}))

export const Menu = () => {
  const { mobile } = useMedia()
  const navigate = useNavigate()
  const classes = useStyle()

  const moveToElement = useCallback(
    (hash: string) => {
      const id = hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        navigate({ hash: hash })
        window.scrollTo({
          top: element.getBoundingClientRect().top,
          behavior: "smooth",
        })
      }
    },
    [navigate],
  )

  return (
    <div>
      {!mobile && (
        <Stack direction={"row"} spacing={2} className={classes.root}>
          <div
            className={classes.link}
            onClick={() => moveToElement(MAIN_ABOUT_ME_HASH)}
          >
            <Trans>Über mich</Trans>
            <div className={classes.underline} />
          </div>
          <div
            className={classes.link}
            onClick={() => moveToElement(MAIN_MY_PROMISE_HASH)}
          >
            <Trans>Mein Versprechen</Trans>
            <div className={classes.underline} />
          </div>
          <div
            className={classes.link}
            onClick={() => moveToElement(MAIN_CONSULTING_CONCEPT_HASH)}
          >
            <Trans>Beratungskonzept</Trans>
            <div className={classes.underline} />
          </div>
          <div
            className={classes.link}
            onClick={() => moveToElement(MAIN_CONTACT_HASH)}
          >
            <Trans>Kontakt</Trans>
            <div className={classes.underline} />
          </div>
        </Stack>
      )}
    </div>
  )
}
