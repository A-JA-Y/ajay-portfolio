import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function Contact() {
  return (
    <>
      <div className="about min-w-full bg-slate-300 dark:bg-zinc-800 dark:text-white rounded-md font-mono py-6">
        <h1 className="text-center py-4 mb-4 text-5xl font-extrabold ">Contact Me</h1>
        <div className="contactInfo">
          <div className="icons flex  justify-center items-center my-3 mx-4">
            <a
              href="https://www.linkedin.com/in/ajay-kumar-358758227/"
              target="_blank"
            >
              <FaLinkedin className="w-8 h-8 m-2 hover:text-blue-900 hover:scale-110 transition-all" />
            </a>
            <a href="https://github.com/A-JA-Y" target="_blank">
              <FaGithub className="w-8 h-8 m-2 hover:text-black hover:scale-110 transition-all" />
            </a>
            <a href="https://www.youtube.com/@zeroToOne-tv2pd/" target="_blank">
              <FaYoutube className="w-8 h-8 m-2 hover:text-red-700 hover:scale-110 transition-all" />
            </a>
            <a href="https://x.com/sir_rrolex" target="_blank">
              <FaTwitter className="w-8 h-8 m-2 hover:text-blue-400 hover:scale-110 transition-all" />
            </a>
            <a href="https://www.instagram.com/sir_rrolex/" target="_blank">
              <FaInstagram className="w-8 h-8 m-2 hover:text-pink-500 hover:scale-110 transition-all" />
            </a>
          </div>
          <div className="info p-3">
            <span className="call text-xl font-medium flex items-center hover:scale-105 hover:text-yellow-600 transition-all justify-center my-2 cursor-pointer"><h1 className="mx-2">Call me:</h1><FaPhoneAlt/><h1>+91-9260967689</h1></span>
            <span className="mail text-xl font-medium flex items-center hover:scale-105 hover:text-yellow-600 transition-all justify-center my-2 cursor-pointer"><h1 className="mx-2">E-mail:</h1><CiMail/><h1><a href="mailtoajay7007@gmail.com">mailtoajay7007@gmail.com</a></h1></span>
            <span className="whatsapp text-xl font-medium flex items-center hover:scale-105 hover:text-yellow-600 transition-all justify-center my-2 cursor-pointer"><h1 className="mx-2">Whatsapp:</h1><FaWhatsapp/><h1><a href="https://wa.link/hed8v6">Click here</a></h1></span>
            <span className="address text-xl font-medium flex items-center hover:scale-105 hover:text-yellow-600 transition-all justify-center my-2 cursor-pointer"><h1 className="mx-2">Address:</h1><CiLocationOn/><h1>Greater Noida, 201310, U.P., India</h1></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
