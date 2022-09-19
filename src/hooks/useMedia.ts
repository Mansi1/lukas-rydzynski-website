import { useMediaQuery, useTheme } from "@mui/material"

export interface MediaSize {
  mobile: boolean
  middle: boolean
  desktop: boolean
}

export const useMedia = (): MediaSize => {
  const theme = useTheme()

  const mobile = useMediaQuery(theme.breakpoints.down("sm"))
  const middle = useMediaQuery(theme.breakpoints.only("md"))
  const desktop = useMediaQuery(theme.breakpoints.up("lg"))

  return { mobile, middle, desktop }
}
