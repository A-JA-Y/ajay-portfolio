import React from "react";
import Typed from "typed.js";
import { FiDownload } from "react-icons/fi";

const Home = () => {

  const downloadCv = () => {
    window.open("https://drive.google.com/file/d/1ZjKGUcUUCt6DwzspkegzLke5r4KGdci_/view?usp=sharing", "_blank");
  }
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["<i>Frontend Web Developer -</i>"],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const el2 = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el2.current, {
      strings: ["<i>Greater Noida, U.P., India.</i>"],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="home  ">
        <div className="container min-w-full flex flex-col items-center justify-center dark:bg-slate-900 my-1 py-8 bg-slate-300 rounded-md">
          <div className="heading text-8xl  font-mono lg:font-extrabold sm:font-bold  my-4 py-4">
            <h1>
              Hi! <br /> I am <br /> Ajay.
            </h1>
          </div>
          <div className="description lg:text-3xl sm:xl font-mono lg:font-medium sm:font-normal  dark:text-yellow-600">
            <h3>
              I am a <span ref={el}></span><br />from <span ref={el2}></span>{" "}
            </h3>
          </div>
          <div className="button m-6 ">
            <button onClick={downloadCv} className="w-34 rounded h-12 bg-slate-700 text-white  dark:bg-slate-800 dark:text-white hover:bg-yellow-600 hover:text-black transition-all "><div className="flex items-center justify-center p-2"><FiDownload className="mx-1"/><span>Download CV</span></div></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
