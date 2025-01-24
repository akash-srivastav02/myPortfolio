import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Experience/>
    <Footer/>
    </>
  )
}

export default App;