import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Experience/>
    <Contact/>
    <Footer/>
    </div>
    <Toaster/>
    </>
  )
}

export default App;