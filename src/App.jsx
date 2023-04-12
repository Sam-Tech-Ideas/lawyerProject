import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Appointment from "./components/Appointment";
import Do from "./components/Do";
import Attorney from "./components/Attorney";
import NewsLetter from "./components/NewsLetter";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="">
      <Layout>
        <Hero />
        <Do/>
      </Layout>
      <Attorney/>
      <NewsLetter/>
      <Contact/>
    </div>
  );
}

export default App;
