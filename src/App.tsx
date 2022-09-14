import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/Main"
import { IMPRESS_ROUTE, MAIN_ROUTE, NOT_FOUND_ROUTE } from "./routes"
import de from "./assets/i18n/de.json"
import en from "./assets/i18n/en.json"
import { initI18next } from "./plugins/i18next"
import { I18nextProvider, useTranslation } from "react-i18next"
import { ThemeProvider } from "./theme/ThemeProvider"
import { ImpressPage } from "./pages/Impress"
import { getRouterBaseName } from "./functions/getRouterBaseName"
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
          <Routes>
            <Route path={MAIN_ROUTE} element={<MainPage />} />
            <Route path={IMPRESS_ROUTE} element={<ImpressPage />} />
            <Route
              path={NOT_FOUND_ROUTE}
              element={<Navigate to={MAIN_ROUTE} />}
            />
          </Routes>
        </BrowserRouter>
      </I18nextProvider>
    </ThemeProvider>
  )
}

export default App
