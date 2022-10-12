import React from "react"
import { makeStyles } from "@mui/styles"
import { getNsTrans } from "../functions/getNsTrans"
import { MAIN_COLOR } from "../theme/themeOptions"

const useStyle = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: MAIN_COLOR,
  },
})
const Trans = getNsTrans("spinner")
export const SuspenseFallback = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <Trans>Ladevorgang</Trans>...
    </div>
  )
}
