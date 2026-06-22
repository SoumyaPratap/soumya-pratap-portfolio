function MeetSphere() {
return ( <div className="max-w-6xl mx-auto px-6 py-16">

  <div className="text-center mb-12">

    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
      MeetSphere
    </h1>

    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
      A full-stack real-time video conferencing platform built
      using WebRTC and Socket.IO, enabling seamless virtual
      communication through live video, audio, and chat.
    </p>

    <div className="flex justify-center gap-4 mt-8 flex-wrap">

      <a
        href="https://meetsphere-video-conferencing-platf.vercel.app/"
        target="_blank"
        rel="noreferrer"
        className="px-5 py-3 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition"
      >
        Live Demo
      </a>

      <a
        href="https://github.com/SoumyaPratap/MeetSphere-Video-Conferencing-Platform"
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
        "JWT Authentication",
        "Create & Join Meetings",
        "Real-Time Video Calling",
        "Real-Time Audio Communication",
        "Real-Time Chat",
        "WebRTC Integration",
        "Socket.IO Signaling",
        "Participant Management",
        "Meeting History",
        "Responsive Design",
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
      Challenges & Learnings
    </h2>

    <p className="text-gray-400 leading-8">
      Building MeetSphere provided hands-on experience with
      WebRTC peer-to-peer communication, Socket.IO real-time
      signaling, JWT-based authentication, and scalable backend
      architecture. This project significantly strengthened my
      understanding of full-stack development and real-time
      communication systems.
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
        "WebRTC",
        "Socket.IO",
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

export default MeetSphere;
