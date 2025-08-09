import React from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'

const App = () => {
  return (
    <div className="">
      {/* <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
      <Header />
      <div className="min-h-[500px]"></div>
      <Footer />
    </div>
  );
};

export default App;
