import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Home } from "./pages/Home";
import { Layout } from "./layouts/layout";
import { Categories } from "./pages/Categories";
import DarkMode from "./components/DarkMode";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import { UserContextWrapper } from "./context/UserContextWrapper";


function App() {
  return (
    <UserContextWrapper>
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Categories />} path="/categories" />
        <Route element={<ProductDetail />} path="/product/:id" />
        <Route element={<Login/>} path="/login" />
      </Routes>
    </Layout>
    </UserContextWrapper>
  );
}

export default App;
