import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="p-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-444554">PRINCE ONYEANUNA</h1>
        <div className="flex space-x-4">
          <a href="https://github.com/Aahil13" className="hover:text-blue-400"><Github /></a>
          <a href="https://www.linkedin.com/in/prince-onyeanuna-607352246/" className="hover:text-blue-400"><Linkedin /></a>
          <a href="mailto:onyeanunaprince@gmail.com" className="hover:text-blue-400"><Mail /></a>
        </div>
      </div>
    </nav>
  );
}