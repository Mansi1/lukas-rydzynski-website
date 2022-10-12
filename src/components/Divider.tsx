import React from "react"
import { makeStyles } from "@mui/styles"
import { Theme } from "@mui/material"
import { joinClasses } from "@milkscout/react"

const useStyle = makeStyles(({ palette }: Theme) => ({
  root: {
    width: "100%",
    maxWidth: 350,
    marginLeft: "auto",
    marginRight: "auto",
    borderTopStyle: "solid",
    borderTopColor: palette.primary.main,
    borderTopWidth: 5,
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  variantPrimary: {
    borderTopColor: palette.primary.main,
  },
  variantSecondary: {
    borderTopColor: palette.secondary.main,
  },
  variantWhite: {
    borderTopColor: "white",
  },
}))
export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "white"
}

export const Divider = ({
  className,
  variant,
  ...otherProps
}: DividerProps) => {
  const classes = useStyle()
  return (
    <div
      className={joinClasses(
        {
          [classes.root]: true,
          [classes.variantPrimary]: variant === "primary",
          [classes.variantSecondary]: variant === "secondary",
          [classes.variantWhite]: variant === "white",
        },
        className,
      )}
      {...otherProps}
    />
  )
}
