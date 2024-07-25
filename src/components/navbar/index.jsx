import React from "react";
import Typed from "typed.js";

export default function Navbar() {
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
      <nav className="min-w-full  bg-transparent dark:text-white dark:bg-gray-950">
        <div className="navItems flex items-center justify-center max-w-6xl mx-auto px-4">
          <div className="logo">
            <h1
              className="text-4xl font-bold m-2 font-mono mx-4 transition-all hover:cursor-none "
              ref={el}
            ></h1>
          </div>
          <div className="navLinks">
            <ul className="flex justify-end">
              <li className="m-2 text-xl font-mono hover:cursor-pointer hover:text-gray-600 transition-all">
                About
              </li>
              <li className="m-2 text-xl font-mono hover:cursor-pointer hover:text-gray-600 transition-all">
                Projects
              </li>
              <li className="m-2 text-xl font-mono hover:cursor-pointer hover:text-gray-600 transition-all">
                Contact
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="mobile md:hidden">
          <div className="logo">
            <h1
              className="text-4xl font-bold m-2 font-mono mx-4 transition-all hover:cursor-none "
              ref={el}
            ></h1>
          </div>
          <div className="navLinks">
            <ul className="flex justify-end">
              <li className="m-2 text-xl font-mono hover:cursor-pointer hover:text-gray-600 transition-all">
                About
              </li>
              <li className="m-2 text-xl font-mono hover:cursor-pointer hover:text-gray-600 transition-all">
                Projects
              </li>
              <li className="m-2 text-xl font-mono hover:cursor-pointer hover:text-gray-600 transition-all">
                Contact
              </li>
            </ul>
          </div> */}
        
        
      </nav>
    </>
  );
}
