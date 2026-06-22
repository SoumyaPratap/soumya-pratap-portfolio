import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center px-6 pt-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Soumya Pratap Singh
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-5 text-xl md:text-2xl text-gray-300"
          >
            Software Developer • MERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-gray-400 text-lg leading-8"
          >
            Passionate about building scalable web applications,
            AI-powered products, and solving real-world problems
            through modern technologies.

            Currently focused on Full Stack Development,
            Software Engineering, Artificial Intelligence,
            and Data Structures & Algorithms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-4"
          >

            <a
              href="/projects"
              className="px-6 py-3 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition"
            >
              View Projects
            </a>

            <a
              href="/resume/Soumya-Pratap-Singh-Resume.pdf"
              download
              className="px-6 py-3 border border-cyan-500 rounded-xl hover:bg-cyan-500 hover:text-white transition"
            >
              Download Resume
            </a>

          </motion.div>

        </div>

        {/* Right Side Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="bg-zinc-900/40 backdrop-blur-md border border-zinc-700 rounded-3xl p-4 shadow-[0_0_40px_rgba(59,130,246,0.15)]">

            <img
              src="/profile.jpg"
              alt="Soumya Pratap Singh"
              className="w-[320px] md:w-[420px] rounded-2xl object-cover"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;