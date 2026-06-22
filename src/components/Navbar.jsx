import { Link } from "react-router-dom";

function Navbar() {
return ( <nav className="fixed top-0 left-0 w-full bg-zinc-950/60 backdrop-blur-md border-b border-zinc-700 z-50">


  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <Link
      to="/"
      className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
    >
      Soumya.dev
    </Link>

    <div className="flex items-center gap-8 text-gray-300">

      <Link
        to="/"
        className="hover:text-cyan-400 transition"
      >
        Home
      </Link>

      <Link
        to="/skills"
        className="hover:text-cyan-400 transition"
      >
        Skills
      </Link>

      <Link
        to="/projects"
        className="hover:text-cyan-400 transition"
      >
        Projects
      </Link>

      <Link
  to="/certificates"
  className="hover:text-cyan-400 transition"
>
  Certificates
</Link>

    </div>

  </div>

</nav>


);
}

export default Navbar;
