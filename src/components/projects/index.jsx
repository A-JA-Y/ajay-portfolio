import React from "react";
import one from "../../assets/home_comfort.png";
import two from "../../assets/github_api.png";
import three from "../../assets/add_to_fav.png";
import four from "../../assets/school_web.png";

function Projects() {
  const projects = [
    {
      projectName: "homeComfort",
      projectDescription:
        "A furniture website that helps you find the best home comfort solutions",
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
      projectTags: ["React", "CSS", "Javascript", "Github-API"],
    },
    {
      projectName: "AddToFavorite",
      projectDescription:
        "AddToFavorite is a simple project that allows you to add your favorite items to a list.",
      projectLink: "https://add-to-fav-five.vercel.app/",
      githubRepo: "https://github.com/A-JA-Y/add-to-fav",
      projectImage: three,
      projectTags: ["React", "Tailwind CSS", "Javascript", "Rest-API"],
    },
    {
      projectName: "School website",
      projectDescription:
        "A school website of showcasing the school's facilities and activities",
      projectLink: "https://school-website-sooty.vercel.app/",
      projectImage: four,
      projectTags: ["React", "Tailwind CSS", "Javascript"],
    },
  ];
  return (
    <>
      <div className="about min-w-full bg-slate-300 dark:bg-gray-900 dark:text-white my-1 rounded-md font-mono py-6">
        <h1 className="text-center py-4 mb-4 text-5xl font-extrabold ">
          Projects
        </h1>
        <div className="projects grid lg:grid-cols-2 sm:grid-cols-1 sm:w-full gap-3  p-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project dark:bg-gray-700 rounded-md p-2 w-full  flex flex-col items-center"
            >
              <h2 className="text-3xl font-bold text-center my-2">
                {project.projectName}
              </h2>
              <img src={project.projectImage} alt={project.projectName} className="hover:scale-95 transition-transform" />
              <p className="h-10 my-1">{project.projectDescription}</p>
              <div className="project-tags">
                {project.projectTags.map((tag, index) => (
                  <span key={index} className="mx-1 my-1 text-xl font-medium">{tag},</span>
                ))}
              </div>
              <a href={project.projectLink} target="_blank" rel="noreferrer">
                <button className="w-44 rounded h-12 bg-gray-700 text-white m-2  dark:bg-slate-800 dark:text-white drop-shadow-lg hover:bg-yellow-600 hover:text-black hover:scale-105 transition-all ">
                  View Project
                </button>
              </a>
              <a href={project.githubRepo} target="_blank" rel="noreferrer">
              <button className="w-44 rounded h-12 bg-gray-700 text-white m-2 dark:bg-slate-800 dark:text-white drop-shadow-lg hover:bg-yellow-600 hover:text-black hover:scale-105 transition-all ">
                  View Code
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
