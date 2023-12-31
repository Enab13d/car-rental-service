import { lazy } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { SharedLayout } from "SharedLayout";

const HomePage = lazy(() => import("../../views/HomePage"));
const CatalogPage = lazy(() => import("../../views/CatalogPage"));
const FavoritesPage = lazy(() => import("../../views/FavoritesPage"));

function App() {


  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to={<HomePage />} />} />
      </Route>
    </Routes>
  );
}

export {
  App
};
