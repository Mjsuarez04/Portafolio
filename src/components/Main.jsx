import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaInstagram, FaLinkedinIn  } from 'react-icons/fa'
import miller from '../../public/images/Miller-3.jpg'

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={miller}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Miller Suarez</h1>
          <h2 className="flex sm:text-2xl text-2xl pt-4 text-gray-800">I'm a
            <TypeAnimation
              sequence={[
                "Front-end Dev", // Types 'One'
                2000, // Waits 1s
                "Coder", // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                "Tech-Enthusiast",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "2em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://github.com/"><FaGithub className="cursor-pointer" size={20} /></a>
            <a href="https://www.instagram.com/millerjsuarez/"><FaInstagram className="cursor-pointer" size={20} /></a> 
            <a href="https://www.linkedin.com/in/miller-suarez-559451a3/"><FaLinkedinIn className="cursor-pointer" size={20} /></a>  
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main