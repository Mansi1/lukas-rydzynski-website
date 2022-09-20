import React, { useEffect, useLayoutEffect } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { IMPRESS_ROUTE, MAIN_ROUTE, NOT_FOUND_ROUTE } from "../routes"
import { MainPage } from "../pages/main/Main"
import { ImpressPage } from "../pages/Impress"

export const AppRoutes = () => {
  const location = useLocation()
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    const hash = window.location.hash
    if (hash !== "") {
      const id = hash.replace("#", "")
      const element = document.getElementById(id)
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top,
          behavior: "smooth",
        })
      }
    }
  }, [])

  return (
    <Routes>
      <Route path={MAIN_ROUTE} element={<MainPage />} />
      <Route path={IMPRESS_ROUTE} element={<ImpressPage />} />
      <Route path={NOT_FOUND_ROUTE} element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  )
}
