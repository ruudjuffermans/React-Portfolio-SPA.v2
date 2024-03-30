import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layouts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;