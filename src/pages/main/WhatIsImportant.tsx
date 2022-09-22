import React from "react"
import { Button } from "@mui/material"
import { getNsTrans } from "../../functions/getNsTrans"
import backgroundImage from "../../assets/img/what-is-important.jpeg"
import { useMedia } from "../../hooks/useMedia"

const Trans = getNsTrans("what-is-important")

export const WhatIsImportant = () => {
  const { mobile } = useMedia()
  return (
    <div>
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
          <h2 style={{ marginBottom: 350 }}>
            <Trans>Was ist Ihnen wichtig?</Trans>
          </h2>
          <p style={{ marginBottom: 50, fontSize: 22 }}>
            <Trans>
              Jeder Mensch hat seine eigenen Träume, Hoffnungen und Ziele. Ich
              helfe Ihnen dabei, Ihre Wünsche zu verwirklichen und finanzielle
              Ziele zu erreichen.
            </Trans>
          </p>
          <Button
            variant="outlined"
            size={"large"}
            style={{ color: "#fff", borderColor: "#fff", fontSize: 18 }}
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
