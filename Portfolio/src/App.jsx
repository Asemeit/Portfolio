
import React, { useState, useEffect } from "react";

// Dummy data for skills and projects
const skills = [
  "React", "JavaScript", "TypeScript", "TailwindCSS", "HTML5", "CSS3", "Git", "Node.js"
];
const projects = [
  {
    name: "Portfolio Website",
    desc: "A responsive portfolio built with React and TailwindCSS.",
    link: "https://github.com/yourusername/portfolio",
    demo: "https://yourdomain.com",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80"
  },
  {
    name: "Weather App",
    desc: "Weather application using OpenWeatherMap API.",
    link: "https://github.com/yourusername/weather-app",
    demo: "",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80"
  }
];

const social = [
  { icon: "fab fa-linkedin", url: "https://linkedin.com/in/yourusername" },
  { icon: "fab fa-github", url: "https://github.com/yourusername" },
  { icon: "fab fa-twitter", url: "https://twitter.com/yourusername" },
];

const App = () => {
  const [dark, setDark] = useState(() =>
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  // Smooth scroll
  const scrollTo = (id) => {
    setMenu(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="font-sans bg-neutral-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Navbar */}
      <nav className="fixed w-full z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <span className="font-bold text-xl text-primary">YourName</span>
          <div className="hidden md:flex items-center gap-6">
            {["hero", "about", "skills", "projects", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="hover:text-primary px-2 py-1 transition"
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
            <button
              aria-label="Dark mode"
              className="ml-2 p-2 rounded-full hover:bg-primary/10 dark:hover:bg-secondary/10 transition"
              onClick={() => setDark((d) => !d)}
            >
              {dark ? (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>) : (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="5" strokeWidth="2" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="2" />
                </svg>
              )}
            </button>
          </div>
          <button className="md:hidden text-primary" onClick={() => setMenu((v) => !v)} aria-label="Open menu">
            <svg width="26" height="26" fill="none" stroke="currentColor">
              <path d="M4 6h18M4 13h18M4 20h18" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur transition-all ${menu ? "block" : "hidden"}`}>
          <div className="flex flex-col items-center gap-3 py-4">
            {["hero", "about", "skills", "projects", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="hover:text-primary px-2 py-1 transition text-lg"
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
            <button
              aria-label="Dark mode"
              className="p-2 rounded-full hover:bg-primary/10 dark:hover:bg-secondary/10 transition"
              onClick={() => setDark((d) => !d)}
            >
              {dark ? (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>) : (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="5" strokeWidth="2" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="2" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center bg-neutral-50 dark:bg-gray-900 pt-24">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-3 text-center">Your Name</h1>
        <h2 className="text-xl md:text-2xl text-primary font-medium mb-5">Frontend Developer</h2>
        <p className="max-w-xl text-lg text-gray-700 dark:text-gray-300 text-center mb-8">
          I build fast, modern, and accessible web apps with React and TailwindCSS.
        </p>
        <a
          href="#projects"
          onClick={e => { e.preventDefault(); scrollTo("projects"); }}
          className="inline-block px-8 py-3 bg-primary text-white rounded-lg shadow hover:bg-secondary transition"
        >
          View Projects
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg mx-auto"
          />
          <div className="flex-1 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Passionate frontend developer with experience building modern web apps using React, TailwindCSS, and JavaScript. I love crafting delightful, performant user experiences.
            </p>
            <a
              href="/cv.pdf"
              download
              className="inline-block bg-secondary text-white px-6 py-2 rounded hover:bg-primary transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-neutral-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-3xl mx-auto">
            {skills.map(skill => (
              <div key={skill} className="flex flex-col items-center hover:scale-110 transition">
                <span className="text-2xl mb-2">{/* Optionally add icon here */}</span>
                <span className="text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-2">
            {projects.map((p, i) => (
              <div key={p.name}
                className="bg-neutral-100 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <img src={p.img} alt={p.name} className="w-full h-48 object-cover" />
                <div className="p-5 flex flex-col">
                  <h3 className="font-bold text-xl mb-2">{p.name}</h3>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">{p.desc}</p>
                  <div className="flex gap-4 mt-auto">
                    <a href={p.link} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                    {p.demo && <a href={p.demo} className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">Live Demo</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-50 dark:bg-gray-900">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <form
            className="flex flex-col gap-4"
            onSubmit={e => { e.preventDefault(); alert("Message sent! (dummy form)"); }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="p-3 rounded bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            />
            <button
              type="submit"
              className="bg-primary text-white py-3 rounded hover:bg-secondary transition"
            >
              Send Message
            </button>
          </form>
          <div className="flex justify-center gap-6 mt-6 text-2xl">
            {social.map((s, i) => (
              <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
                className="hover:text-primary transition">
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
          <div className="flex gap-4">
            {["hero", "about", "projects", "contact"].map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className="hover:text-primary transition cursor-pointer"
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
