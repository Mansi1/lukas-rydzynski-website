import React from "react"
import { Button, Typography } from "@mui/material"
import { getNsTrans } from "../../functions/getNsTrans"
import backgroundImage from "../../assets/img/what-is-important.jpeg"

const Trans = getNsTrans("main")

export const WhatIsImportant = () => {
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
          marginRight: -24,
          marginLeft: -24,
        }}
      >
        <div
          style={{
            maxWidth: 450,
            margin: "auto",
            paddingTop: 150,
            paddingBottom: 150,
            marginRight: 24 * 2,
            marginLeft: 24 * 2,
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
