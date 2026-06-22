import { Link } from "react-router-dom";

function Projects() {
const projects = [
{
title: "MeetSphere",
description:
"A full-stack real-time video conferencing platform built using WebRTC and Socket.IO, enabling secure virtual meetings with real-time audio, video, and chat communication.",
features: [
"React",
"Node.js",
"MongoDB",
"WebRTC",
"Socket.IO",
"JWT",
],
tech:
"React • Node.js • Express.js • MongoDB • WebRTC • Socket.IO • JWT",
caseStudy: "/projects/meetsphere",
live:
"https://meetsphere-video-conferencing-platf.vercel.app/",
github:
"https://github.com/SoumyaPratap/MeetSphere-Video-Conferencing-Platform",
},


{
  title: "Sigma GPT",
  description:
    "An AI-powered productivity and learning platform featuring AI Chat, Resume Analysis, Mock Interviews, and DSA Problem Solving tools for students and developers.",
  features: [
    "AI Chat",
    "Resume Analyzer",
    "Mock Interview",
    "DSA Solver",
    "MongoDB",
    "Node.js",
  ],
  tech:
    "React • Node.js • Express.js • MongoDB • AI Integration • REST APIs",
  caseStudy: "/projects/sigma-gpt",
  live: "https://sigma-gpt-rose.vercel.app/",
  github: "https://github.com/SoumyaPratap/sigma-gpt",
},


];

return ( <section
   id="projects"
   className="max-w-6xl mx-auto px-6 py-16"
 > <h2 className="text-4xl font-bold text-center mb-4">
Featured Projects </h2>


  <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
    Full-stack and AI-powered applications built using modern
    technologies, scalable architecture, and best development
    practices.
  </p>

  <div className="grid md:grid-cols-2 gap-8">

    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500 hover:-translate-y-1 transition-all duration-300"
      >
        <h3 className="text-2xl font-bold mb-4">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-7 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-3 py-2 bg-zinc-800 rounded-lg text-sm text-gray-300"
            >
              {feature}
            </span>
          ))}
        </div>

        <p className="text-sm text-gray-500 mb-6">
          {project.tech}
        </p>

        <div className="flex flex-wrap gap-3">

          <Link
            to={project.caseStudy}
            className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500 hover:text-white transition"
          >
            Case Study
          </Link>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition"
          >
            GitHub
          </a>

        </div>
      </div>
    ))}

  </div>
</section>


);
}

export default Projects;
