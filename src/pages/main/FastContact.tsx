import React from "react"
import { getNsTrans } from "../../functions/getNsTrans"
import { EMAIL, MOBILE } from "../../variables"
import { makeStyles } from "@mui/styles"
import { Theme } from "@mui/material"

const Trans = getNsTrans("fast-contact")
const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    color: "#fff",
    paddingTop: 25,
    paddingBottom: 45,
    maxWidth: 700,
    margin: "auto",
  },
  header: { color: palette.primary.main, fontWeight: "bold" },
  link: {
    cursor: "pointer",
    fontStyle: "italic",
  },
}))

export const FastContact = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <p className={classes.header}>
        <Trans tOptions={{ email: EMAIL, mobile: MOBILE }}>
          Ich helfe Ihnen gerne in jeder Lebenslage, kontaktieren Sie mich
          telefonisch unter{" "}
          <a className={classes.link} href={`tel:${MOBILE}`}>
            {"{{mobile}}"}
          </a>{" "}
          oder schriftlich an{" "}
          <a className={classes.link} href={`mailto:${EMAIL}`}>
            {"{{email}}"}
          </a>
        </Trans>
      </p>
    </div>
  )
}
