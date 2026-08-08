import React from "react";
import Hero from "./Hero";
import About from "./About";
import Store from "./Store";
import Stats from "./Stats";
import Feature from "./Feature";
import Blog from "./Blog";
import Faq from "./Faq";
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Store />
      <Stats />
      <Feature />
      <Blog />
      <Faq />
    </div>
  );
}
