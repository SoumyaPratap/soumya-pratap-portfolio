function About() {
return ( <section
   id="about"
   className="max-w-5xl mx-auto px-6 py-12"
 > <h2 className="text-4xl font-bold text-center mb-8">
About Me </h2>


  <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 md:p-10 text-center">

    <p className="text-gray-300 text-lg leading-8">
      Hello, I'm{" "}
      <span className="text-cyan-400 font-semibold">
        Soumya Pratap Singh
      </span>
      , a BCA student and passionate Software Developer with a
      strong interest in Full Stack Development, Artificial
      Intelligence, and Problem Solving.
    </p>

    <p className="text-gray-400 text-lg leading-8 mt-5">
      I specialize in the MERN Stack and enjoy building scalable,
      user-focused web applications. My development journey has
      led me to build projects such as MeetSphere, a real-time
      video conferencing platform powered by WebRTC and Socket.IO,
      and Sigma GPT, an AI-powered productivity platform featuring
      Resume Analysis, Mock Interviews, and DSA Problem Solving
      tools.
    </p>

    <p className="text-gray-400 text-lg leading-8 mt-5">
      Alongside development, I actively practice Data Structures &
      Algorithms to strengthen my problem-solving abilities and
      prepare for software engineering opportunities. I am
      continuously learning, building, and exploring modern
      technologies to become a better developer every day.
    </p>

  </div>
</section>


);
}

export default About;
