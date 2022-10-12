import React from "react"
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
import { joinClasses } from "@milkscout/react"
import { navigateToId } from "../../functions/navigateToId"

const Trans = getNsTrans("menu")

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    fontSize: 28,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: -20,
    marginBottom: 30,
    textDecoration: "underline",
  },
  rootMobile: {
    textDecoration: "unset",
    textAlign: "center",
  },
  link: {
    fontFamily: "Italiana",
    cursor: "pointer",
    color: palette.primary.main,
  },
}))

export const Menu = () => {
  const { mobile } = useMedia()
  const classes = useStyle()
  const navigate = useNavigate()

  const moveToElement = navigateToId(navigate)

  return (
    <div>
      <Stack
        direction={mobile ? "column" : "row"}
        spacing={2}
        className={joinClasses({
          [classes.root]: true,
          [classes.rootMobile]: mobile,
        })}
      >
        <span
          className={classes.link}
          onClick={() => moveToElement(MAIN_ABOUT_ME_HASH)}
        >
          <span>
            <Trans>Über mich</Trans>
          </span>
        </span>
        <span
          className={classes.link}
          onClick={() => moveToElement(MAIN_MY_PROMISE_HASH)}
        >
          <Trans>Mein Versprechen</Trans>
        </span>
        <span
          className={classes.link}
          onClick={() => moveToElement(MAIN_CONSULTING_CONCEPT_HASH)}
        >
          <Trans>Beratungskonzept</Trans>
        </span>
        <span
          className={classes.link}
          onClick={() => moveToElement(MAIN_CONTACT_HASH)}
        >
          <Trans>Kontakt</Trans>
        </span>
      </Stack>
    </div>
  )
}
