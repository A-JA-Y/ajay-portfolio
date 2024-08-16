import React from "react";
import Typed from "typed.js";
import logoImage from "../../assets/logo.png";

export default function Navbar({ scrollToSection, refs }) {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Ajay.</i>"],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <nav className=" bg-slate-300 bg-opacity-80  dark:text-white dark:bg-zinc-800 rounded-b-md sticky top-0 shadow-xl z-50">
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="navItems flex items-center justify-center">
            <div className="logo">
              <h1
                className="text-4xl font-bold my-2 font-mono mx-6 transition-all hover:cursor-none "
                ref={el}
              ></h1>
            </div>
            <div className="navLinks hidden lg:flex ">
              <ul className="flex justify-end">
                <li
                  className="my-2 mx-3 text-xl drop-shadow-md  font-mono hover:cursor-pointer hover:text-yellow-600 transition-all"
                  onClick={() => scrollToSection(refs.aboutRef)}
                >
                  About
                </li>
                <li
                  className="my-2 mx-3 text-xl drop-shadow-md  font-mono hover:cursor-pointer hover:text-yellow-600 transition-all"
                  onClick={() => scrollToSection(refs.projectRef)}
                >
                  Projects
                </li>
                <li
                  className="my-2 mx-3 text-xl drop-shadow-md  font-mono hover:cursor-pointer hover:text-yellow-600 transition-all"
                  onClick={() => scrollToSection(refs.contactRef)}
                >
                  Contact
                </li>
              </ul>
            </div>
            <div className="mobile sm:block lg:hidden">
              <div className="navLinks">
                <img src={logoImage} className="w-8 h-8 rounded-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
