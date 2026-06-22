function Contact() {
return ( <section className="max-w-5xl mx-auto px-6 py-12">


  <h2 className="text-4xl font-bold text-center mb-4">
    Contact Me
  </h2>

  <p className="text-gray-400 text-lg text-center mb-8 max-w-2xl mx-auto">
    Open to internships, collaborations, freelance opportunities,
    and exciting software development projects.
  </p>

  <div className="grid md:grid-cols-3 gap-5">

    <a
      href="mailto:Soumyapratapsingh0001@gmail.com"
      className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 text-center hover:border-cyan-500 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">
        Email
      </h3>

      <p className="text-gray-400 text-sm break-all">
        Soumyapratapsingh0001@gmail.com
      </p>
    </a>

    <a
      href="https://github.com/SoumyaPratap"
      target="_blank"
      rel="noreferrer"
      className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 text-center hover:border-cyan-500 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">
        GitHub
      </h3>

      <p className="text-gray-400">
        @SoumyaPratap
      </p>
    </a>

    <a
      href="https://www.linkedin.com/in/soumya-pratap-singh-571955302"
      target="_blank"
      rel="noreferrer"
      className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 text-center hover:border-cyan-500 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">
        LinkedIn
      </h3>

      <p className="text-gray-400">
        View Profile
      </p>
    </a>

  </div>

</section>


);
}

export default Contact;
