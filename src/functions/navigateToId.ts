import { NavigateFunction } from "react-router"
import { scrollToId } from "./scrollToId"

export const navigateToId = (navigate: NavigateFunction) => (hash: string) => {
  if (scrollToId(hash)) {
    navigate({ hash: hash })
  }
}
