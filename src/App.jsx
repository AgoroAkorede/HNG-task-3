import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Mainpage from "./pages/Mainpage/Mainpage";
import Placepage from "./pages/Placepage/Placepage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/place" element={<Placepage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
