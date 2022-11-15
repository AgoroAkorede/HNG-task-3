import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Mainpage from "./pages/Mainpage/Mainpage";
import Placepage from "./pages/Placepage/Placepage";
import PlacesContextProvider from "./context/placesContext";

function App() {
  let modal = false;
  return (
    <PlacesContextProvider>
      <BrowserRouter>
        <Header onHeader={modal} />
        <Routes>
          <Route path="/" element={<Mainpage onModal={modal} />} />
          <Route path="/place" element={<Placepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PlacesContextProvider>
  );
}

export default App;
