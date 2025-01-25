import React from 'react'
import tailwindcss from '../../public/tailwindcss.png'
import express from '../../public/express.png'
import mysql from '../../public/mysql.jpeg'
import javascript from '../../public/javascript.png'
import mongodb from '../../public/mongodb.jpg'
import node from '../../public/node.png'
import reactjs from '../../public/reactjs.png'
import java from '../../public/java.png'


function Experience() {
    const cardItem = [
        {
            id:1,
            logo:mongodb,
            name:"MongoDB"
        },
        {
            id:2,
            logo:express,
            name:"Express"
        },
        {
            id:3,
            logo:reactjs,
            name:"ReactJs"
        },
        {
            id:4,
            logo:node,
            name:"NodeJS"
        },
        {
            id:5,
            logo:tailwindcss,
            name:"Tailwind CSS"
        },
        {
            id:6,
            logo:mysql,
            name:"MySql"
        },
        {
            id:7,
            logo:javascript,
            name:"Javascript"
        },
        {
            id:7,
            logo:java,
            name:"Java"
        }

    ]
  return (
    <>
    <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
            <h1 className="text-3xl font-bold mb-5">Experience</h1>
            <p>I've more than 2 years of experience in below technologies.</p>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 my-7">
                {
                    cardItem.map(({id, logo, name}) => (
                        <>
                        <div className="md:w-[280px] md:h-[280px] flex flex-col items-center justify-center p-1 rounded-full shadow-lg cursor-pointer hover:scale-110 bg-white" key={id}>
                            <img src={logo} className="w-[150px] h-[150px] rounded-full border-[2px]" alt="" />
                            <div>
                                <div className="font-semibold text-l mb-2 px-2 dark:text-gray-900">{name}</div>
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

export default Experience;