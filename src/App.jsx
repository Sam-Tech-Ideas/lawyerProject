import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import Appointment from "./components/Appointment";
import Do from "./components/Do";

function App() {
  return (
    <div className="">
      <Layout>
        <Hero />
        <Do/>
      </Layout>
    </div>
  );
}

export default App;
