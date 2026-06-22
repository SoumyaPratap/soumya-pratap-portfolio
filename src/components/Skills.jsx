function Skills() {
const skillCategories = [
{
title: "Frontend Development",
skills: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
},
{
title: "Backend Development",
skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
},
{
title: "Database",
skills: ["MongoDB", "Mongoose"],
},
{
title: "Programming & DSA",
skills: ["Java", "Data Structures", "Algorithms", "Problem Solving"],
},
{
title: "Tools & Platforms",
skills: ["Git", "GitHub", "Postman", "VS Code"],
},
];

return ( <section
   id="skills"
   className="max-w-6xl mx-auto px-6 py-16"
 > <h2 className="text-4xl font-bold text-center mb-4">
Technical Skills </h2>


  <p className="text-gray-400 text-lg text-center mb-12 max-w-2xl mx-auto">
    Technologies, tools, and programming concepts I use to build
    modern, scalable, and user-focused software applications.
  </p>

  <div className="grid md:grid-cols-2 gap-6">

    {skillCategories.map((category, index) => (
      <div
        key={index}
        className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500 transition-all duration-300"
      >
        <h3 className="text-xl font-semibold mb-4 text-cyan-400">
          {category.title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-3 py-2 bg-zinc-800 rounded-lg text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}

  </div>
</section>


);
}

export default Skills;
