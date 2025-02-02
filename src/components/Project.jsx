import React from 'react'
import GIF from "../../public/GIF.gif";
import Project1 from "../../public/Project1.gif"
import Project2 from "../../public/Project2.gif"
import Project3 from "../../public/Project3.png"
import Project4 from "../../public/Project4.png"

function Project() {
    const cardItem = [
        {
            id:1,
            logo:Project1,
            name:"Portfolio",
            description:"Used Tech: ReactJs, Tailwind CSS",
            visit:"https://akash-srivastav.netlify.app/",
            sourceCode:"https://github.com/akash-srivastav02/myPortfolio"
        },
        {
            id:2,
            logo:Project2,
            name:"Url Bit",
            description:"Used Tech: MERN + TailwindCSS",
            visit:"https://urlbit.netlify.app/",
            sourceCode:"https://github.com/akash-srivastav02/url-shortener"
        },
        {
            id:3,
            logo:Project3,
            name:"Weather App",
            description:"Used Tech: MERN + TailwindCSS",
            visit:"https://weatherfrontend-nine.vercel.app/",
            sourceCode:"https://github.com/akash-srivastav02/weatherApp"
        },
        {
            id:4,
            logo:Project4,
            name:"TicTacToe Game",
            description:"Used Tech: HTML, CSS, JS",
            visit:"https://akash-srivastav02.github.io/tictactoe/",
            sourceCode:"https://github.com/akash-srivastav02/tictactoe"
        }
        // {
        //     id:5,
        //     logo:GIF,
        //     name:"Project4",
        //     description:"NO POINTS",
        //     visit:"https://akash-srivastav02.github.io/registration_form/",
        //     sourceCode:"https://akash-srivastav02.github.io/registration_form/"
        // }
        // {
        //     id:6,
        //     logo:Project3,
        //     name:"Form",
        //     description:"Used Tech: HTML, CSS, JS",
        //     visit:"https://akash-srivastav02.github.io/registration_form/",
        //     sourceCode:"https://github.com/akash-srivastav02/registration_form"
        // },
        // {
        //     id:7,
        //     logo:Project4,
        //     name:"Amazon Clone",
        //     description:"Used Tech: HTML, CSS",
        //     visit:"https://akash-srivastav02.github.io/Amazon_Clone/",
        //     sourceCode:"https://github.com/akash-srivastav02/Amazon_Clone"
        // }
    ]
    const handleVisitClick = (url) => {
        window.open(url, "_blank");
      };
    const handleSourceCodeClick = (url) => {
        window.open(url, "_blank");
      };
  return (
    <>
    <div name="Project" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
            <h1 className="text-3xl font-bold mb-5">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 my-5 place-items-center">
                {
                    cardItem.map(({id, logo, name, description, visit, sourceCode}) => (
                        <>
                        <div className="md:w-[600px] md:h-[250px] border-[2px] p-1 rounded-lg shadow-lg cursor-pointer hover:scale-105 mb-2 md:mb-4 place-content-center" key={id}>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                            <img src={logo} className="w-full h-full rounded-lg object-cover border-[2px] md:ml-2 mb-2 mr-2" alt="" />
                            <div>
                            <div className="ml-2">
                                <div className="font-bold text-xl mb-2 mt-2 px-2">{name}</div>
                                <p className="px-2 text-gray-900 dark:text-white">{description}</p>
                            </div>
                            <div className="justify-around space-x-3 px-6 py-4">
                               <button  onClick={() => handleVisitClick(visit)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Visit</button>
                               <button onClick={() => handleSourceCodeClick(sourceCode)} className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
                            </div>
                            </div>
                            </div>
                        </div>
                        </>
                    ))
                }
            </div>
        </div>
    </div>
    </>
  )
}

export default Project;