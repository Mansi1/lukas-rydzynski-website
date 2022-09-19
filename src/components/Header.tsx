import React from "react"
import { MAIN_ROUTE } from "../routes"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"
import logoUrl from "../assets/img/logo.png"
import { Stack } from "@mui/material"
import { useMedia } from "../hooks/useMedia"

const useStyle = makeStyles({
  root: {
    textAlign: "center",
  },
  logo: { cursor: "pointer" },
})

export const Header = () => {
  const classes = useStyle()
  const navigate = useNavigate()
  const { desktop } = useMedia()
  return (
    <div className={classes.root}>
      <img
        src={logoUrl}
        height={300}
        alt={"logo"}
        onClick={() => navigate(MAIN_ROUTE)}
        className={classes.logo}
      />
      {desktop && (
        <Stack
          direction={"row"}
          spacing={2}
          style={{
            fontSize: 20,
            fontWeight: "bold",
            justifyContent: "center",
            marginTop: -20,
            marginBottom: 30,
          }}
        >
          <div style={{ fontFamily: "Italiana" }}>
            Vermögensberatung
            <div
              style={{
                width: "100%",
                borderTop: "1px solid black",
                marginTop: -5,
              }}
            />
          </div>
          <div style={{ fontFamily: "Italiana" }}>
            Über mich
            <div
              style={{
                width: "100%",
                borderTop: "1px solid black",
                marginTop: -5,
              }}
            />
          </div>
          <div style={{ fontFamily: "Italiana" }}>
            Mein Versprechen
            <div
              style={{
                width: "100%",
                borderTop: "1px solid black",
                marginTop: -5,
              }}
            />
          </div>
          <div style={{ fontFamily: "Italiana" }}>
            Beratungskonzept
            <div
              style={{
                width: "100%",
                borderTop: "1px solid black",
                marginTop: -5,
              }}
            />
          </div>
          <div style={{ fontFamily: "Italiana" }}>
            Kontakt
            <div
              style={{
                width: "100%",
                borderTop: "1px solid black",
                marginTop: -5,
              }}
            />
          </div>
        </Stack>
      )}
    </div>
  )
}
