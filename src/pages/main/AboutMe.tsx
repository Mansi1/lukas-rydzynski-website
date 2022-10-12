import React from "react"
import { getNsTrans } from "../../functions/getNsTrans"
import { MAIN_ABOUT_ME_HASH } from "../../routes"
import backgroundImage from "../../assets/img/about-me.jpeg"
import profileImage from "../../assets/img/profile.jpg"
import { useMedia } from "../../hooks/useMedia"
import { MAIN_COLOR } from "../../theme/themeOptions"

const Trans = getNsTrans("about-me")

export const AboutMe = () => {
  const { mobile } = useMedia()
  return (
    <>
      <div
        id={MAIN_ABOUT_ME_HASH}
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
            paddingBottom: 250,
            paddingRight: mobile ? 16 : 24,
            paddingLeft: mobile ? 16 : 24,
          }}
        >
          <h2>
            <Trans>Über mich</Trans>
          </h2>
          <div
            style={{
              borderTop: "3px solid orange",
              maxWidth: 250,
              margin: "auto",
              marginBottom: 80,
            }}
          />
          <p>
            <Trans>
              Meine Arbeit ist meine Leidenschaft. Dabei liegen mir in erster
              Linie die Wünsche und Interessen meiner Kunden am Herzen. Jede
              Situation ist individuell - daher gehe ich sie mit Herz und
              Verständnis an!
            </Trans>
          </p>
        </div>
      </div>
      <img
        src={profileImage}
        alt={"profile picture"}
        loading={"lazy"}
        style={{ maxWidth: 550, width: "100%", marginTop: -180 }}
      />
      <div style={{ fontFamily: "Italiana", fontSize: 34, color: MAIN_COLOR }}>
        Lukas Rydzynski
      </div>
    </>
  )
}
