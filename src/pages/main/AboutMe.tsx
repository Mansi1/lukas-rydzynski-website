import React from "react"
import { getNsTrans } from "../../functions/getNsTrans"
import { MAIN_ABOUT_ME_HASH } from "../../routes"
import backgroundImage from "../../assets/img/about-me.jpeg"
import profileImage from "../../assets/img/profile.jpg"
import { useMedia } from "../../hooks/useMedia"
import { makeStyles } from "@mui/styles"
import { Theme } from "@mui/material"
import { joinClasses } from "@milkscout/react"
import { NAME } from "../../variables"
import { Divider } from "../../components/Divider"

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
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
  },
  rootMobile: {
    marginRight: -16,
    marginLeft: -16,
  },
  content: {
    maxWidth: 450,
    paddingTop: 150,
    paddingBottom: 250,
    marginRight: 24,
    marginLeft: 24,
  },
  contentMobile: {
    marginRight: 16,
    marginLeft: 16,
  },
  textHeader: { textShadow: "2px 2px #000" },
  text: {
    paddingTop: 50,
    textShadow: "2px 2px #000",
  },
  profileImage: { maxWidth: 550, width: "100%", marginTop: -180 },
  name: {
    fontFamily: "Italiana",
    fontSize: 34,
    color: palette.primary.main,
  },
}))
const Trans = getNsTrans("about-me")
export const AboutMe = () => {
  const { mobile } = useMedia()
  const classes = useStyle()
  return (
    <>
      <div
        id={MAIN_ABOUT_ME_HASH}
        className={joinClasses({
          [classes.root]: true,
          [classes.rootMobile]: mobile,
        })}
      >
        <div
          className={joinClasses({
            [classes.content]: true,
            [classes.contentMobile]: mobile,
          })}
        >
          <h2 className={classes.textHeader}>
            <Trans>Über mich</Trans>
          </h2>
          <Divider variant={"secondary"} />
          <p className={classes.text}>
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
        className={classes.profileImage}
      />
      <div className={classes.name}>{NAME}</div>
    </>
  )
}
