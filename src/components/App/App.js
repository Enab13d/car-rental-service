import { lazy} from "react";

import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "Layout";




const HomePage = lazy(() => import("../../pages/HomePage"));
const CatalogPage = lazy(() => import("../../pages/CatalogPage"));
const FavoritesPage = lazy(() => import("../../pages/FavoritesPage"));



function App() {


  return (
          <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage/>} />
      </Route>
    </Routes>
  );
}

export {
  App
};
