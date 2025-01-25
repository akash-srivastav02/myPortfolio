import React from 'react';

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
  <>
  <hr />
  <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col items-center justify-center"> 
                <div className="flex space-x-4 rounded-lg">
                    <FaSquareGithub size={24}/>
                    <FaLinkedin size={24}/>
                    <FaInstagramSquare size={24}/>
                    <FaSquareXTwitter size={24}/>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                    <p className="text-sm">
                        &copy; 2025 Akash Srivastav. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
  </footer>
  </>
  )
}

export default Footer;