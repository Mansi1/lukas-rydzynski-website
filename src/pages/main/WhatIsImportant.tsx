import React from "react"
import { Button } from "@mui/material"
import { getNsTrans } from "../../functions/getNsTrans"
const Trans = getNsTrans("main")

export const WhatIsImportant = () => {
  return (
    <div>
      <div>
        <h2>
          <Trans>Was ist Ihnen wichtig?</Trans>
        </h2>
        <p>
          <Trans>
            Jeder Mensch hat seine eigenen Träume, Hoffnungen und Ziele. Ich
            helfe Ihnen dabei, Ihre Wünsche zu verwirklichen und finanzielle
            Ziele zu erreichen.
          </Trans>
        </p>
        <Button variant="outlined">
          <Trans>Jetzt Beratungstermin vereinbaren</Trans>
        </Button>
      </div>
    </div>
  )
}
