import React from 'react';

function About() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
            I’m Akash Srivastav, a freelance MERN Stack Developer with expertise in MongoDB, Express.js, React.js, Node.js, Tailwind CSS, and SQL. I specialize in full-stack development, creating seamless user experiences and efficient back-end systems. Familiar with Git and GitHub, I’m always eager to take on new challenges and contribute to innovative projects.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold">Education & Training</h1>
        <span>
          &#91;MCA&#93; WCTM, Gurgaon &#40;Graduation Year: 2026&#41;, &#91;BCA&#93; RSMT, Varanasi &#40;Graduation Year: 2024&#41; , Apna College&#40;Full Stack Web Developement&#41;
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold">Skills &amp; Expertise</h1>
        <span>
            Skilled in React.js, Node.js, Express.js, and MongoDB, with experience using Tailwind CSS for responsive design. Proficient in SQL and NoSQL databases, and familiar with Git and GitHub for version control. Strong problem-solving abilities and a collaborative approach to building scalable solutions.
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold">Professional Experience</h1>
        <span>
            <div>
              <h2>Freelance MERN Stack Developer</h2>
              <h3><i>Independnet Projetcs | Self-Driven Learning</i></h3>
              <ul className="list-disc list-inside">
                <li>Developed full-stack web applications using React.js, Node.js, Express.js, and MongoDB, focusing on creating scalable and user-friendly solutions.</li>
                <li>Built responsive and visually engaging interfaces with Tailwind CSS to enhance user experience.</li>
              </ul>
            </div>
        </span>
        <br />
        <h1 className="text-green-600 font-semibold">Achivements &amp; Awards</h1>
        <span>
            Developed full-stack applications, completed a MERN Stack course, and built a responsive portfolio website, receiving positive feedback for work and continuous growth.
        </span>
        </div>
    </div>
    </>
  )
}

export default About;