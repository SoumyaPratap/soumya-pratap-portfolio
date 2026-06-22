function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800">

      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

        <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Soumya Pratap
        </h3>

        <p className="text-gray-400 mt-3">
          Software Developer • MERN Stack Developer
        </p>

        <div className="flex justify-center gap-6 mt-6">

          <a
            href="https://github.com/SoumyaPratap"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/soumya-pratap-singh-571955302"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:Soumyapratapsingh0001@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            Email
          </a>

        </div>

        <p className="text-gray-500 text-sm mt-8">
          © 2026 Soumya Pratap Singh • Built with React & Tailwind CSS
        </p>

      </div>

    </footer>
  );
}

export default Footer;