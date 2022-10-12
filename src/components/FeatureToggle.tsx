import React, { PropsWithChildren } from "react"
import { makeStyles } from "@mui/styles"
import { Theme } from "@mui/material"
import { joinClasses } from "@milkscout/react"

const useStyle = makeStyles(({}: Theme) => ({
  hide: {
    display: "none",
  },
}))

export const isFeatureEnabled = (storageKey: string) => {
  if (process.env.NODE_ENV !== "production") {
    return true
  }
  return !!localStorage.getItem(storageKey)
}

export interface FeatureToggleProps {
  storageKey: string
}

export const FeatureToggle = ({
  storageKey,
  children,
}: PropsWithChildren<FeatureToggleProps>) => {
  const classes = useStyle()
  const isDisabled = !isFeatureEnabled(storageKey)
  return (
    <div className={joinClasses({ [classes.hide]: isDisabled })}>
      {children}
    </div>
  )
}
