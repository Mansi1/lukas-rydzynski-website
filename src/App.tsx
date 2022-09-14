import React from "react"
import { BrowserRouter } from "react-router-dom"
import de from "./assets/i18n/de.json"
import en from "./assets/i18n/en.json"
import { initI18next } from "./plugins/i18next"
import { I18nextProvider, useTranslation } from "react-i18next"
import { ThemeProvider } from "./theme/ThemeProvider"
import { getRouterBaseName } from "./functions/getRouterBaseName"
import { AppRoutes } from "./route/AppRoutes"

initI18next(
  {
    de,
    en,
  },
  "en",
)

function App() {
  const { i18n } = useTranslation()

  return (
    <ThemeProvider>
      <I18nextProvider i18n={i18n}>
        <BrowserRouter basename={getRouterBaseName()}>
          <AppRoutes />
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default App
