import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Tours from "./Components/Tours";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="Tours" element={<Tours />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
