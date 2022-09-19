import React from "react"
import { Button, Typography } from "@mui/material"
import { getNsTrans } from "../../functions/getNsTrans"
import backgroundImage from "../../assets/img/what-is-important.jpeg"
import { useMedia } from "../../hooks/useMedia"

const Trans = getNsTrans("main")

export const WhatIsImportant = () => {
  const { mobile } = useMedia()
  return (
    <div style={{}}>
      <div
        style={{
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          color: "#fff",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
          marginRight: -(mobile ? 16 : 24),
          marginLeft: -(mobile ? 16 : 24),
        }}
      >
        <div
          style={{
            maxWidth: 450,
            paddingTop: 150,
            paddingBottom: 150,
            paddingRight: mobile ? 16 : 24,
            paddingLeft: mobile ? 16 : 24,
          }}
        >
          <h2
            style={{ fontSize: 28, marginBottom: 350, fontFamily: "Italiana" }}
          >
            <Trans>Was ist Ihnen wichtig?</Trans>
          </h2>
          <Typography
            variant={"body1"}
            style={{ marginBottom: 30, fontSize: 18, fontFamily: "Raleway" }}
          >
            <Trans>
              Jeder Mensch hat seine eigenen Träume, Hoffnungen und Ziele. Ich
              helfe Ihnen dabei, Ihre Wünsche zu verwirklichen und finanzielle
              Ziele zu erreichen.
            </Trans>
          </Typography>
          <Button
            variant="outlined"
            size={"large"}
            style={{ color: "#fff", borderColor: "#fff" }}
          >
            <Trans>Jetzt Beratungstermin vereinbaren</Trans>
          </Button>
        </div>
        <div
          style={{
            borderTop: "3px solid orange",
            minWidth: 250,
            marginBottom: 20,
          }}
        />
      </div>
    </div>
  )
}
