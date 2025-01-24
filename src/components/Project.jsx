import React from 'react'
import GIF from "../../public/GIF.gif";

function Project() {
    const cardItem = [
        {
            id:1,
            logo:GIF,
            name:"Project1"
        },
        {
            id:2,
            logo:GIF,
            name:"Project2"
        },
        {
            id:3,
            logo:GIF,
            name:"Project3"
        },
        {
            id:4,
            logo:GIF,
            name:"Project4"
        }
    ]
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
            <h1 className="text-3xl font-bold mb-5">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-5 place-items-center">
                {
                    cardItem.map(({id, logo, name}) => (
                        <>
                        <div className="md:w-[600px] md:h-[250px] border-[2px] p-1 rounded-lg shadow-lg cursor-pointer hover:scale-105 md:mb-4 place-content-center" key={id}>
                            <div className="grid grid-col-1 md:grid-cols-2">
                            <img src={logo} className="w-[300px] h-[220px] border-[5px] ml-8 md:ml-2 mt-2 mb-2 mr-2" alt="" />
                            <div>
                            <div className="ml-2">
                                <div className="font-bold text-xl mb-2 mt-2 px-2">{name}</div>
                                <p className="px-2 text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, ut d totam optio!.</p>
                            </div>
                            <div className="justify-around space-x-3 px-6 py-4">
                               <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Visit</button>
                               <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
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