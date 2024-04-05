import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layouts";
import Post from "../pages/Post";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/post/:id"} element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
