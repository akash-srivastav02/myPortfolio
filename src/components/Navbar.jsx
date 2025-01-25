import React, { useState } from "react";
import pic from "../../public/profile.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import Toggle from "./Toggle";
import {Link} from "react-scroll";

function Navbar() {
  const [menu,setMenu] = useState(false);
  const navItems = [
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"Project"
    },
    {
      id:4,
      text:"Experience"
    },
    {
      id:5,
      text:"Contact"
    }
  ]
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 h-16 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-gray-300 dark:text-gray-900">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="" />
          <h1 className="font-semibold text-xl cursor-pointer">Akash <span className="text-green-500 text-2xl">Srivastav</span>
          <p className="text-sm">MERN Stack Developer</p></h1>
        </div>
        {/* desktop navbar */}
        <div>
          <ul className="hidden lg:flex space-x-8">
          <Toggle/>
            {
              navItems.map(({id, text}) => (
                <li key={id} className="hover:scale-105 duration-200 cursor-pointer"><Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">{text}</Link></li>
              ))
            }
          </ul>
          <div className="lg:hidden flex space-x-4">
          <Toggle />
          <div onClick={() => setMenu(!menu)}>{menu?<IoCloseSharp size={28}/>:<AiOutlineMenu size={28}/>}</div>
          </div>
        </div>
      </div>
      {/* mobile navbar */}
      {
        menu && (
       <div className="bg-white">
          <ul className="lg:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
            {
              navItems.map(({id, text}) => (
                <li key={id} className="hover:scale-105 duration-200 cursor-pointer font-semibold"><Link to={text} smooth={true} duration={500} offset={-70} activeClass="active" onClick={() => setMenu(!menu)}>{text}</Link></li>
              ))
            }
          </ul>
        </div>
        )
      }
    </div>
    </>
  )
}

export default Navbar;