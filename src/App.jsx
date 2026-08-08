import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home-Page/Home";
import Store from "./Components/Store-Page/Store";
import Blog from "./Components/Blog-Page/Blog";
import Methods from "./Components/Our-methods/Methods";
import Support from "./Components/Support/Support";
import Footer from "./Components/Footer";
import CTA from "./Components/CTA";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/our-methods" element={<Methods />} />
        <Route path="/support" element={<Support />} />
      </Routes>

      <CTA />
      <Footer />
    </BrowserRouter>
  );
}
