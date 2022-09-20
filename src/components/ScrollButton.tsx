import React, { useLayoutEffect, useState } from "react"
import { IconButton } from "@mui/material"
import { ArrowUpIcon } from "@mui-extra/icons/ArrowUpIcon"
import { MAIN_COLOR } from "../theme/themeOptions"

export const ScrollButton = () => {
  const [visible, setVisible] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
                           in place of 'smooth' */
    })
  }

  useLayoutEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop
      if (scrolled > 300) {
        setVisible(true)
      } else if (scrolled <= 300) {
        setVisible(false)
      }
    }
    toggleVisible()
    window.addEventListener("scroll", toggleVisible)
    return () => window.removeEventListener("scroll", toggleVisible)
  }, [])

  return (
    <>
      {visible && (
        <div style={{ position: "fixed", bottom: 5, right: 5 }}>
          <IconButton
            color="primary"
            onClick={() => scrollToTop()}
            style={{
              border: "solid 1px " + MAIN_COLOR,
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
            aria-label="scroll to top"
          >
            <ArrowUpIcon />
          </IconButton>
        </div>
      )}
    </>
  )
}
