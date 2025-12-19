import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaGraduationCap, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython, FaJava, FaGitAlt, FaBars, FaTimes } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Internships', id: 'internships' },
    { name: 'Contact', id: 'contact' },
  ];

  const defaultBgStyle = {
    backgroundImage: "url('/bg2.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative font-sans scroll-smooth">
      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-4 z-50 md:hidden bg-black/70 backdrop-blur-md p-2 rounded-lg text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex fixed top-4 left-0 w-full justify-center items-center gap-6 z-50 text-sm text-white">
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className="hover:text-yellow-400 transition font-medium">
            {item.name}
          </a>
        ))}
        <a
          href="/Shivanjali_Resume.pdf"
          download
          className="inline-block px-5 py-2 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
        >
          Download CV
        </a>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-xl font-medium hover:text-yellow-400 transition"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/Shivanjali_Resume.pdf"
              download
              className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download CV
            </a>
          </div>
        </div>
      )}

      {/* Left Icons - Hidden on mobile */}
      <div className="hidden md:flex fixed left-6 top-1/2 transform -translate-y-1/2 z-40 flex-col gap-5 text-yellow-400 text-xl">
        <a href="https://github.com/dumpalashivanjali/" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shivanjali-dumpala-9a1776258" target="_blank" rel="noreferrer"><FaLinkedin /></a>
      </div>

      {/* HOME */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center px-4 md:px-6 lg:px-20 text-center gap-6 md:gap-10 relative"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll',
        }}
      >
        <div className="flex flex-col items-center space-y-6 md:space-y-8">
          {/* Profile Image - Show on mobile */}
          <div className="md:hidden">
            <img src="/profile.jpg" alt="Shivanjali Profile" className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-yellow-300 shadow-lg" />
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 drop-shadow">Shivanjali Dumpala</h1>
            <p className="text-lg sm:text-xl mt-4 text-white">Computer Science & Engineering Student</p>
            <p className="text-sm sm:text-md text-gray-300 mt-2">Hyderabad, Telangana</p>
          </div>

          {/* Profile Image - Show on desktop */}
          <div className="hidden md:block">
            <img src="/profile.jpg" alt="Shivanjali Profile" className="w-64 h-64 lg:w-72 lg:h-72 object-cover rounded-full border-4 border-yellow-300 shadow-lg" />
          </div>
        </div>

        {/* Social Links - Show on mobile */}
        <div className="flex md:hidden gap-6 text-yellow-400 text-2xl">
          <a href="https://github.com/dumpalashivanjali/" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/shivanjali-dumpala-9a1776258" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>

        <a href="#about" className="absolute bottom-4 md:bottom-8 text-sm text-yellow-300 animate-bounce hover:text-yellow-400 transition">
          ↓ Scroll to About
        </a>
      </section>

      {/* ABOUT */}
      <div style={defaultBgStyle}>
        <section id="about" className="min-h-screen p-4 md:p-8 lg:p-12 flex items-center justify-center">
          <div className="max-w-6xl w-full">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-6 md:mb-10 border-b border-yellow-300 inline-block">About Me</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Note Card 1 */}
              <div className="bg-black/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-yellow-400 relative">
                <h3 className="text-lg md:text-xl font-semibold text-yellow-300 mb-2">👩‍💻 Who I Am</h3>
                <p className="text-white text-sm md:text-md">
                  I'm Shivanjali, a Computer Science student passionate about software, systems and solving real-world problems.
                  I love learning new technologies and bringing ideas to life with clean, efficient code.
                </p>
              </div>

              {/* Note Card 2 */}
              <div className="bg-black/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-yellow-400 relative">
                <h3 className="text-lg md:text-xl font-semibold text-yellow-300 mb-2">💡 Tech Stack</h3>
                <ul className="list-disc pl-4 text-white space-y-1 text-sm md:text-md">
                  <li>Languages: Python, Java, JavaScript</li>
                  <li>Web: React, Node.js, Express, MongoDB</li>
                  <li>Tools: Git, GitHub, VSCode, Postman</li>
                </ul>
              </div>

              {/* Note Card 3 */}
              <div className="bg-black/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-yellow-400 relative">
                <h3 className="text-lg md:text-xl font-semibold text-yellow-300 mb-2">🚀 My Vision</h3>
                <p className="text-white text-sm md:text-md">
                  I aim to contribute to impactful tech that empowers people.
                  My dream is to build software that matters — in AI, education, or sustainability.
                </p>
              </div>

              {/* Note Card 4 */}
              <div className="bg-black/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-yellow-400 relative">
                <h3 className="text-lg md:text-xl font-semibold text-yellow-300 mb-2">💻 Coding Vibes</h3>
                <p className="text-white font-mono text-sm md:text-md">
                  const developer = {"{"} mindset: "build, break, fix, learn", caffeine: "essential" {"}"};
                </p>
                <p className="text-white mt-3 italic text-sm md:text-md">"First, solve the problem. Then, write the code."</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* EDUCATION */}
      <div style={defaultBgStyle}>
        <section id="education" className="min-h-screen flex items-center justify-center p-4 md:p-8">
          <div className="relative max-w-6xl w-full flex flex-col items-center">

            {/* Education Icon */}
            <div className="text-yellow-400 text-6xl md:text-8xl lg:text-9xl mb-6 md:mb-8">
              <FaGraduationCap />
            </div>

            {/* Connecting Lines - Hidden on mobile */}
            <div className="hidden md:block absolute w-full top-[140px] lg:top-[170px] flex justify-between items-center px-6 md:px-20">
              <div className="h-1 w-1/3 bg-yellow-400"></div>
              <div className="h-1 w-1/3 bg-yellow-400"></div>
            </div>

            {/* Cards */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6 md:gap-16 px-4 md:px-12">
              
              {/* Left - B.Tech */}
              <div className="bg-black/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg text-white w-full md:w-1/2 border-l-4 border-yellow-400">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2">🎓 B.Tech in CSE</h3>
                <p className="text-sm md:text-md">HITAM, Hyderabad</p>
                <p className="text-sm md:text-md">CGPA: 9.75</p>
                <p className="text-xs md:text-sm text-yellow-300 mt-1">2022 – 2026 (Pursuing)</p>
              </div>

              {/* Right - Intermediate */}
              <div className="bg-black/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg text-white w-full md:w-1/2 border-l-4 border-yellow-400">
                <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2">🏫 Intermediate (MPC)</h3>
                <p className="text-sm md:text-md">Alphores Junior College, Karimnagar</p>
                <p className="text-sm md:text-md">Score: 95.7%</p>
                <p className="text-xs md:text-sm text-yellow-300 mt-1">2020 – 2022</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* SKILLS */}
      <div style={defaultBgStyle}>
        <section id="skills" className="min-h-screen p-4 md:p-8 lg:p-12 flex items-center justify-center">
          <div className="max-w-6xl w-full">
            <div className="flex justify-center mb-6 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 border-b border-yellow-300 inline-block">
                Skills
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 mt-6">
              {/* Skill Cards */}
              {[
                { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
                { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
                { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
                { name: 'React.js', icon: <FaReact />, color: 'text-cyan-400' },
                { name: 'Node.js', icon: <FaNode />, color: 'text-green-500' },
                { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-400' },
                { name: 'Python', icon: <FaPython />, color: 'text-blue-300' },
                { name: 'Java', icon: <FaJava />, color: 'text-red-500' },
                { name: 'SQL', icon: <SiMysql />, color: 'text-blue-400' },
                { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-400' },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-black/70 backdrop-blur-md p-3 md:p-6 rounded-xl shadow-lg flex flex-col items-center text-white hover:scale-105 transition transform duration-300"
                >
                  <div className={`text-2xl md:text-4xl mb-2 md:mb-3 ${skill.color}`}>{skill.icon}</div>
                  <p className="text-xs md:text-md font-semibold text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* PROJECTS */}
      <div style={defaultBgStyle}>
        <section id="projects" className="min-h-screen p-4 md:p-8 lg:p-12 flex items-center justify-center">
          <div className="max-w-6xl w-full">
            {/* Centered Heading */}
            <div className="flex justify-center mb-6 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 border-b border-yellow-300 inline-block">Projects</h2>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "BugTracker",
                  description: "Role-based issue tracking application.",
                  link: "https://github.com/Anjali85220/bug-tracker",
                },
                {
                  title: "DocSign",
                  description: "PDF signing app with email-based access links.",
                  link: "https://github.com/Anjali85220/docsign-frontend",
                },
                {
                  title: "Expense Tracker",
                  description: "Track your income and expenses using MERN stack.",
                  link: "https://github.com/Anjali85220/Expense-tracker",
                },
                {
                  title: "Crop Yield Prediction",
                  description: "ML model using Random Forest for agriculture.",
                  link: "https://github.com/Anjali85220/Crop_yield_prediction",
                },
                {
                  title: "Traffic Flow Simulation",
                  description: "Python + OpenCV based vehicle flow sim.",
                  link: "https://github.com/Anjali85220/Traffic-Simulation-Modelling",
                },
                {
                  title: "Egg Timer App",
                  description: "Desktop timer app built with Electron.js.",
                  link: "https://github.com/Anjali85220/egg-timer-app",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-black/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg text-white hover:scale-105 transform transition duration-300"
                >
                  <h3 className="text-lg md:text-xl font-bold text-yellow-300 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition text-sm"
                  >
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CERTIFICATIONS */}
      <div style={defaultBgStyle}>
        <section id="certifications" className="min-h-screen p-4 md:p-8 lg:p-12 flex items-center justify-center">
          <div className="max-w-6xl w-full">
            {/* Heading */}
            <div className="flex justify-center mb-6 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 border-b border-yellow-300 inline-block">Certifications</h2>
            </div>

            {/* Grid of Certificates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: "Programming Foundations with JS, HTML, CSS",
                  provider: "Duke University (Coursera)",
                  link: "/certificates/duke-js-certificate.pdf",
                },
                {
                  title: "Everyday Excel",
                  provider: "University of Colorado",
                  link: "/certificates/excel-certificate.pdf",
                },
                {
                  title: "Cryptography I",
                  provider: "Stanford University",
                  link: "/certificates/crypto-certificate.pdf",
                },
                {
                  title: "MongoDB Basics",
                  provider: "MongoDB University",
                  link: "/certificates/mongodb-certificate.pdf",
                },
                {
                  title: "Technology Job Simulation",
                  provider: "Deloitte (Forage)",
                  link: "/certificates/deloitte-forage-certificate.pdf",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-black/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg text-white hover:scale-105 transform transition duration-300"
                >
                  <h3 className="text-base md:text-lg font-bold text-yellow-300 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{cert.provider}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block px-3 md:px-4 py-1 md:py-2 bg-yellow-400 text-black rounded-full text-xs md:text-sm font-medium hover:bg-yellow-300 transition"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* INTERNSHIPS */}
      <div style={defaultBgStyle}>
        <section id="internships" className="min-h-screen p-4 md:p-8 lg:p-12 flex items-center justify-center">
          <div className="max-w-4xl w-full">
            {/* Centered Heading */}
            <div className="flex justify-center mb-6 md:mb-10">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 border-b border-yellow-300 inline-block">Internships & Training</h2>
            </div>

            <div className="space-y-4 md:space-y-6">
              {[
                {
                  title: "Java Foundations",
                  provider: "Oracle Academy",
                  year: "2024",
                },
                {
                  title: "Python Essentials",
                  provider: "OpenEDG Python Institute",
                  year: "2024",
                },
                {
                  title: "Frontend Development",
                  provider: "TASK - Telangana Academy",
                  year: "2024",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black/70 backdrop-blur-md p-4 md:p-6 rounded-xl shadow-lg text-white border-l-4 border-yellow-400 hover:scale-105 transform transition duration-300"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-yellow-300">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.provider}</p>
                  <p className="text-xs text-yellow-300 mt-1">Year: {item.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* CONTACT */}
      <div style={defaultBgStyle}>
        <section id="contact" className="min-h-screen p-4 md:p-8 lg:p-12 flex items-center justify-center">
          <div className="bg-black/70 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-md text-white max-w-xl w-full text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-4 md:mb-6 border-b border-yellow-300 inline-block">Contact Me</h2>

            <p className="text-base md:text-lg mb-4">Let's build something amazing together!</p>

            <div className="space-y-4 mt-6">
              <p className="text-sm md:text-base">
                📧 <a href="mailto:dumpalashivanjali8@gmail.com" className="text-yellow-400 hover:underline break-all">dumpalashivanjali8@gmail.com</a>
              </p>
              <p className="text-sm md:text-base">
                📱 <a href="tel:+918522061936" className="text-yellow-400 hover:underline">+91 85220 61936</a>
              </p>
            </div>

            {/* Social links */}
            <div className="mt-6 flex justify-center gap-4 text-yellow-400 text-xl md:text-2xl">
              <a href="https://github.com/dumpalashivanjali/" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/shivanjali-dumpala-9a1776258" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-black/70 backdrop-blur-md p-4 text-center text-white">
        <p className="text-sm">© 2024 Shivanjali Dumpala. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;