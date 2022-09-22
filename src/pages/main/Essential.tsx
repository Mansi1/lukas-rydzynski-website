import React, { ReactNode, useLayoutEffect, useState } from "react"
import { NotProductionValues } from "@milkscout/react"
import { getNsTrans } from "../../functions/getNsTrans"
import { MAIN_COLOR } from "../../theme/themeOptions"

const Trans = getNsTrans("essentails")

const ESSENTIALS_ARRAY: Array<ReactNode> = [
  <Trans>Leben</Trans>,
  <Trans>Familie</Trans>,
  <Trans>Hobbies</Trans>,
  <Trans>Beruf</Trans>,
  <Trans>Reisen</Trans>,
]
const getRandomNumber = () => {
  return Math.floor(Math.random() * ESSENTIALS_ARRAY.length)
}
export const Essential = () => {
  const [essential, setEssential] = useState<number>(getRandomNumber())

  useLayoutEffect(() => {
    const intervalListener = () => {
      setEssential(getRandomNumber())
    }
    const interval = setInterval(intervalListener, 2500)
    return () => clearInterval(interval)
  }, [setEssential])

  const essentialEl = ESSENTIALS_ARRAY[essential]

  return (
    <div
      style={{
        maxWidth: 450,
        margin: "auto",
        marginTop: 80,
        marginBottom: 80,
      }}
    >
      <h2 style={{ color: MAIN_COLOR }}>
        <Trans>Damit Sie sich aufs Wesentliche konzentrieren können:</Trans>
        <br />
        <span style={{ color: "orange" }}>{essentialEl}</span>
      </h2>
      <div
        style={{
          borderTop: "3px solid " + MAIN_COLOR,
          maxWidth: 250,
          margin: "auto",
          marginTop: 60,
          marginBottom: 60,
        }}
      />
      <p style={{ color: MAIN_COLOR }}>
        <Trans>
          Mein ganzheitlicher Ansatz für die Vermögensverwaltung stellt sicher,
          dass Ihre persönliche und berufliche Situation bei der Entwicklung der
          passenden Strategie für Ihr Vermögen berücksichtigt wird.
        </Trans>
      </p>
      <NotProductionValues nodes={ESSENTIALS_ARRAY} />
    </div>
  )
}
