import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Mainpage from "./pages/Mainpage/Mainpage";


function App() {
  return (
  <div>
    <Header />
    <Mainpage />
    <Footer />
  </div>
  );
}

export default App;
