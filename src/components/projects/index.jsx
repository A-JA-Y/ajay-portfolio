import React from "react";
import one from "../../assets/home_comfort.png";
import two from "../../assets/github_api.png";
import three from "../../assets/GTA-VI.png";
import four from "../../assets/school_web.png";
import five from "../../assets/five.png";
import six from "../../assets/six.png";
import seven from "../../assets/seven.png";
import eight from "../../assets/eight.png";
import nine from "../../assets/nine.png";
import ten from "../../assets/ten.png";

function Projects() {
  const projects = [
    {
      projectName: "homeComfort",
      projectDescription:
        "A furniture website that helps you find the best home comfort solutions.",
      projectLink: "https://first-app-beige.vercel.app/",
      githubRepo: "https://github.com/A-JA-Y/HomeComfort-Furniture-website-",
      projectImage: one,
      projectTags: ["React", "Tailwind CSS", "Javascript", "Rest-API"],
    },
    {
      projectName: "Github Profile Card",
      projectDescription:
        "GitHub Profile Card is a simple project that fetches data from the GitHub API and displays it in a card format.",
      projectLink: "https://a-ja-y.github.io/GitHub_Api_project/",
      githubRepo: "https://github.com/A-JA-Y/GitHub_Api_project",
      projectImage: two,
      projectTags: ["HTML", "CSS", "Javascript", "Github-API"],
    },
    {
      projectName: "Gta VI landing page",
      projectDescription:
        "Gta VI landing page is a simple project that showcases the landing page for the highly anticipated game.",
      projectLink: "https://gta-6-web.vercel.app/",
      githubRepo: "https://github.com/A-JA-Y/GTA6-Web",
      projectImage: three,
      projectTags: ["React", "Tailwind CSS", "Javascript", "GSAP"],
    },
    {
      projectName: "School website",
      projectDescription:
        "A school website of showcasing the school's facilities and activities.",
      projectLink: "https://school-website-sooty.vercel.app/",
      githubRepo: "https://github.com/A-JA-Y/schoolWebsite",
      projectImage: four,
      projectTags: ["React", "Tailwind CSS", "Javascript"],
    },
    {
      projectName: "UniqueKhushboo.com",
      projectDescription:
        "A perfume website that showcases the unique perfumes of a startup named UniqueKhushboo.com ",
      projectLink: "https://anime-js-project-eight.vercel.app/",
      githubRepo: "https://github.com/A-JA-Y/anime_js_project",
      projectImage: five,
      projectTags: ["React", "Tailwind CSS", "Javascript"],
    },
    {
      projectName: "FreeGameZ",
      projectDescription:
        "A gaming website that showcases the latest games that are available for free officially.",
      projectLink: "https://free-games-kappa.vercel.app/",
      githubRepo: "https://github.com/A-JA-Y/free-games",
      projectImage: six,
      projectTags: ["React", "Tailwind CSS", "Javascript"],
    },
    {
      projectName: "Pass-My-Word",
      projectDescription:
        "A password manager web page that helps you to store your passwords securely.",
      projectLink: "https://pass-my-words.vercel.app/",
      githubRepo: "https://github.com/A-JA-Y/pass-my-words",
      projectImage: seven,
      projectTags: ["React", "Tailwind CSS", "Javascript", "localstorage"],
    },
    {
      projectName: "Weather-App",
      projectDescription:
        "A weather app that helps you to know the weather of any city in the world.",
      projectLink: "https://weather-app-roan-xi-81.vercel.app/",
      githubRepo: "https://github.com/A-JA-Y/Weather_App",
      projectImage: eight,
      projectTags: ["React", "Tailwind CSS", "Javascript"],
    },
    {
      projectName: "AI•AnimeArt•Generator",
      projectDescription:
        "A web application that uses Gemini AI to generate anime-style artwork.",
      projectLink: "https://ai-image-generation-zeta.vercel.app/",
      githubRepo: "https://github.com/A-JA-Y/ai-image-generation",
      projectImage: nine,
      projectTags: ["HTML", "CSS", "Javascript","Next Js", "Gemini AI", "Rest-API"],
    },
    {
      //project skeleton for future projects
      projectName: "Upcoming project",
      projectDescription: "Project description will be attached here , stay tuned!.. Its in progress.",
      projectLink: "https://itzajay.live/",
      githubRepo: "https://github.com/A-JA-Y/",
      projectImage: ten,
      projectTags: ["tech stack will be attached here", "soon,", "stay tuned!."],
    }
  ];

  return (
    <div className="min-w-full bg-slate-300 dark:bg-zinc-800 dark:text-white my-1 rounded-md font-mono py-6 px-4">
      <h1 className="text-center py-4 mb-4 text-3xl md:text-5xl font-extrabold">
        Projects
      </h1>
      <div className="projects grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project relative bg-gray-300 dark:bg-zinc-700 p-4 m-2 rounded-2xl shadow-inner
                       hover:shadow-xl transition-shadow flex flex-col items-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-center my-2">
              {project.projectName}
            </h2>
            <div className=" project-image mb-4 flex justify-center items-center overflow-hidden rounded-xl  drop-shadow-md shadow-zinc-500 shadow-md">

            <img
              src={project.projectImage}
              alt={project.projectName}
              className="w-[30em] h-[10em] max-w-xs rounded-xl  hover:scale-110  transition-transform duration-300 ease-in-out"
            />
            </div>
            <p className="my-1 text-center leading-relaxed">
              {project.projectDescription}
            </p>
            <div className="project-tags flex flex-wrap justify-center">
              {project.projectTags.map((tag, i) => (
                <span
                  key={i}
                  className="mx-1 my-1 text-sm md:text-xl font-medium leading-relaxed"
                >
                  <ol className="   text-gray-600 dark:text-gray-300">
                    <li >{tag}</li>
                  </ol>
                </span>
              ))}
            </div>
            <a href={project.projectLink} target="_blank" rel="noreferrer">
              <button className="w-full md:w-44 rounded-xl h-12 bg-gray-700 text-white m-2 dark:bg-slate-800 drop-shadow-lg hover:bg-yellow-600 px-6 hover:text-black hover:scale-105 transition-all">
                View Project
              </button>
            </a>
            <a href={project.githubRepo} target="_blank" rel="noreferrer">
              <button className="w-full md:w-44 rounded-xl h-12 bg-gray-700 text-white m-2 dark:bg-slate-800 drop-shadow-lg hover:bg-yellow-600 px-6 hover:text-black hover:scale-105 transition-all">
                View Code
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
