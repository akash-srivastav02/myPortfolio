import React from 'react'
import pic from "../../public/profile.png";

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"> 
       <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mt-12 lg:mt-24 space-y-2 order-2 lg:order-1">
            <span className="text-xl">Welcome!</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
               <h1>Hello, I'm a</h1>
               {/* Loop text */}
               <ReactTyped 
                    className="text-red-700 font-bold"
                    strings={["Developer", "Coder", "Programmer"]} 
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true} />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify"> 
                I am a passionate MERN Stack Developer with a focus on delivering high-quality, scalable web applications. My objective is to create dynamic solutions that meet both user and client needs while continuously improving my skills to stay ahead in the fast-paced tech world.
            </p>
            <br />
            { /* social media icons*/}
           <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="space-y-2">
               <h1 className="font-bold text-center">Available on</h1>
               <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/akash-srivastav02" target="_blank"><FaSquareGithub className="text-2xl cursor-pointer"/></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/akash-srivastav02/" target="_blank"><FaLinkedin className="text-2xl cursor-pointer"/></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/codesskyy/" target="_blank"><FaInstagramSquare className="text-2xl cursor-pointer" /></a>
                  </li>
                  <li>
                    <a href="https://x.com/sky_srivastav" target="_blank"><FaSquareXTwitter className="text-2xl cursor-pointer"/></a>
                  </li>
               </ul>
            </div>
            <div className="space-y-2"> 
               <h1 className="font-bold text-center">Currently working on</h1>
               <div className="flex space-x-5">
                <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"/>
                <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"/>
                <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"/>
                <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"/> 
               </div>
            </div>
           </div>
          </div>
          <div className="flex items-center justify-center lg:w-1/2 lg:ml-48 lg:mt-20 mt-8 order-1">
            <img src={pic} className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
          </div>
       </div>
    </div>
    <hr />
    </>
  )
}

export default Home;