import React from "react"
import { MAIN_ROUTE } from "../routes"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"
import logoUrl from "../assets/img/logo.png"

const useStyle = makeStyles({
  root: {
    textAlign: "center",
  },
  logo: { cursor: "pointer", maxHeight: 300, maxWidth: "100%" },
})

export const Header = () => {
  const classes = useStyle()
  const navigate = useNavigate()
  return (
    <div className={classes.root}>
      <img
        src={logoUrl}
        alt={"logo"}
        loading={"eager"}
        onClick={() => navigate(MAIN_ROUTE)}
        className={classes.logo}
      />
    </div>
  )
}
