import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, MarvelPage, SearchHero, Heroes } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">

            <Routes>
                <Route path="DC" element={<DcPage />} />
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="search" element={<SearchHero />} />
                <Route path="hero/:id" element={<Heroes />} />
                <Route path="/" element={ <Navigate to={ "/marvel" } /> } />
            </Routes>

        </div>

    </>
  )
}
