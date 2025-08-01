import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-center mt-6">
      <div className="flex items-center justify-between w-[90vw] max-w-5xl px-8 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3">
          <FaReact className="text-3xl text-white drop-shadow" />
          <Link to="/" className="text-2xl font-semibold text-white tracking-wide hover:text-purple-300 transition">
            Ayushi Ghosh
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <a href="#about" className="text-lg font-semibold text-white hover:text-purple-300 transition">About</a>
          <a href="#experience" className="text-lg font-semibold text-white hover:text-purple-300 transition">Experience</a>
          <Link to="/projects" className="text-lg font-semibold text-white hover:text-purple-300 transition">Projects</Link>
          <Link to="/blogs" className="text-lg font-semibold text-white hover:text-purple-300 transition">Blogs</Link>
          <a href="#contact" className="text-lg font-semibold text-white hover:text-purple-300 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
