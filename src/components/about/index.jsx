import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
function About() {
  return (
    <>
      <div className="about min-w-full bg-slate-300 dark:bg-zinc-800 dark:text-white rounded-md font-mono py-6">
        <h1 className="text-center py-4 mb-4 text-5xl font-extrabold ">
          About Me
        </h1>
        <div className="container lg:flex  lg:flex-row sm:flex-col items-center justify-center pb-3">
          <div className=" lg:w-3/5 sm:w-full">
            <div className="intro p-5">
              <p>
                "Hello, I'm <i>Ajay</i>, a dedicated undergraduate student
                residing in Greater Noida, Uttar Pradesh. Currently studying at
                PIIT Greater Noida, affiliated with CCS University, Meerut, I
                have a strong passion for technology and software development.{" "}
                <br /> I actively participate in the{" "}
                <i>Google Developer Students Club (GDSC)</i> and the
                <i>Google Developer Group (GDG) Noida</i> , where I collaborate
                on innovative projects and stay updated with industry trends.{" "}
                <br /> With effective communication and teamwork skills, I aim
                to contribute my expertise to impactful tech projects that drive
                positive change."
              </p>
            </div>
          </div>
          <hr className="lg:h-64 lg:w-1 border-black sm:h-1 sm:w-24  bg-black bg-opacity-30 rounded-full" />
          <div className="links">
            <div className="icons flex lg:flex-col sm:flex-row justify-center items-center my-3 mx-4">
              <a
                href="https://www.linkedin.com/in/ajay-kumar-358758227/"
                target="_blank"
              >
                <FaLinkedin className="w-8 h-8 m-2 hover:text-blue-900 hover:scale-110 transition-all" />
              </a>
              <a href="https://github.com/A-JA-Y" target="_blank">
                <FaGithub className="w-8 h-8 m-2 hover:text-black hover:scale-110 transition-all" />
              </a>
              <a
                href="https://www.youtube.com/@zeroToOne-tv2pd/"
                target="_blank"
              >
                <FaYoutube className="w-8 h-8 m-2 hover:text-red-700 hover:scale-110 transition-all" />
              </a>
              <a href="https://x.com/sir_rrolex" target="_blank">
                <FaTwitter className="w-8 h-8 m-2 hover:text-blue-400 hover:scale-110 transition-all" />
              </a>
              <a href="https://www.instagram.com/sir_rrolex/" target="_blank">
                <FaInstagram className="w-8 h-8 m-2 hover:text-pink-500 hover:scale-110 transition-all" />
              </a>
            </div>
          </div>
          <hr className="lg:h-64 lg:w-1 border-black sm:h-1 sm:w-24 bg-black bg-opacity-30 rounded-full" />
          <div className="right lg:w-2/5 sm:w-full p-4">
            <div className="skills flex flex-col items-center justify-center">
              <h2 className="text-4xl font-bold drop-shadow-md my-2">Skills</h2>
              <hr className="h-1 w-28 border-black rounded-full bg-black mb-3 bg-opacity-30" />
              <ul className="text-2xl font-semibold">
                <li>
                  <div className="flex items-center justify-center hover:scale-105"><FaHtml5 className=" mx-1 hover:text-yellow-600"/><span className="hover:text-yellow-500 hover:scale-105 transition-all">HTML</span></div>
                </li>
                <li>
                  <div className="flex items-center justify-center hover:scale-105"><FaCss3Alt className=" mx-1 hover:text-blue-700"/><span className="hover:text-yellow-500 hover:scale-105 transition-all">CSS</span></div>
                </li>
                <li>
                  <div className="flex items-center justify-center hover:scale-105"><IoLogoJavascript className=" mx-1 hover:text-yellow-400"/><span className="hover:text-yellow-500 hover:scale-105 transition-all">Javascript</span></div>
                </li>
                <li>
                  <div className="flex items-center justify-center hover:scale-105"><FaReact className=" mx-1 hover:text-blue-600"/><span className="hover:text-yellow-500 hover:scale-105 transition-all">React Js</span></div>
                </li>
                <li>
                  <div className="flex items-center justify-center hover:scale-105"><RiTailwindCssFill className=" hover:text-cyan-400 mx-1"/><span className="hover:text-yellow-500 hover:scale-105 transition-all">Tailwind CSS</span></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
