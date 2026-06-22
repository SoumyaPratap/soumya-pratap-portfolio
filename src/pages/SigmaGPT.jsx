function SigmaGPT() {
return ( <div className="max-w-6xl mx-auto px-6 py-16">


  <div className="text-center mb-12">

    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
      Sigma GPT
    </h1>

    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
      An AI-powered learning and productivity platform designed
      to help students and developers improve their skills,
      prepare for technical interviews, and enhance productivity
      through intelligent tools and conversational AI.
    </p>

    <div className="flex justify-center gap-4 mt-8 flex-wrap">

      <a
        href="https://sigma-gpt-rose.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="px-5 py-3 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition"
      >
        Live Demo
      </a>

      <a
        href="https://github.com/SoumyaPratap/sigma-gpt"
        target="_blank"
        rel="noreferrer"
        className="px-5 py-3 border border-cyan-500 rounded-xl hover:bg-cyan-500 hover:text-white transition"
      >
        GitHub Repository
      </a>

    </div>

  </div>

  <div className="grid md:grid-cols-3 gap-6 mb-12">

    <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
      <h3 className="font-semibold mb-2 text-cyan-400">
        Frontend
      </h3>
      <p className="text-gray-400">
        React • Tailwind CSS
      </p>
    </div>

    <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
      <h3 className="font-semibold mb-2 text-cyan-400">
        Backend
      </h3>
      <p className="text-gray-400">
        Node.js • Express.js
      </p>
    </div>

    <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6">
      <h3 className="font-semibold mb-2 text-cyan-400">
        Database
      </h3>
      <p className="text-gray-400">
        MongoDB
      </p>
    </div>

  </div>

  <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 mb-12">

    <h2 className="text-3xl font-bold mb-6">
      Key Features
    </h2>

    <div className="grid md:grid-cols-2 gap-3">

      {[
        "AI Chat Assistant",
        "Resume Analyzer",
        "Mock Interview Assistant",
        "DSA Problem Solver",
        "Authentication System",
        "Chat History Management",
        "Interactive Dashboard",
        "Learning Support Tools",
        "Responsive User Interface",
        "AI Integration",
      ].map((feature, index) => (
        <div
          key={index}
          className="bg-zinc-800 rounded-xl px-4 py-3"
        >
          {feature}
        </div>
      ))}

    </div>

  </div>

  <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 mb-12">

    <h2 className="text-3xl font-bold mb-6">
      Problem Statement
    </h2>

    <p className="text-gray-400 leading-8">
      Students and aspiring developers often use multiple
      platforms for interview preparation, resume improvement,
      coding practice, and AI assistance. Sigma GPT was built
      to combine these essential tools into a single platform,
      improving accessibility, productivity, and learning
      efficiency.
    </p>

  </div>

  <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 mb-12">

    <h2 className="text-3xl font-bold mb-6">
      Challenges & Learnings
    </h2>

    <p className="text-gray-400 leading-8">
      Building Sigma GPT provided valuable experience in
      AI-powered workflows, scalable full-stack architecture,
      authentication systems, API integration, and user-centric
      application design. The project strengthened my
      understanding of modern software development and AI-driven
      applications.
    </p>

  </div>

  <div>

    <h2 className="text-3xl font-bold mb-6">
      Tech Stack
    </h2>

    <div className="flex flex-wrap gap-3">

      {[
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "AI Integration",
        "JWT",
      ].map((tech, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-zinc-900 border border-cyan-500 rounded-lg"
        >
          {tech}
        </span>
      ))}

    </div>

  </div>

</div>

);
}

export default SigmaGPT;
