import "./App.css";
import hero from "./assets/hero .png";
import resumeScreenshot1 from "../projects/ai resume analyzer/ai ss.png";
import resumeScreenshot2 from "../projects/ai resume analyzer/result.png";
import germanSS1 from "../projects/german asr/Screenshot 2026-06-29 211858.png";
import germanSS2 from "../projects/german asr/Screenshot 2026-06-29 212010.png";
import tradingBotSS from "../projects/Trading bot/trading bot.jpeg";
import { useState } from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h3>Hello, I'm</h3>
          <h1>
            <span className="highlight-name">Krish Kakkar</span>
          </h1>
          <h2>Full Stack Developer</h2>
          <p>
            MERN Stack Developer passionate about building scalable,
            responsive and modern web applications using React.js,
            Node.js, Express.js, MongoDB and Python.
          </p>

          <div className="buttons">
            <a
              href="https://github.com/krish24git"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href="https://www.linkedin.com/in/krish-kakkar-651788289?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="quick-links">
            <NavLink to="/about" className="pill-link">
              About
            </NavLink>
            <NavLink to="/skills" className="pill-link">
              Skills
            </NavLink>
            <NavLink to="/projects" className="pill-link">
              Projects
            </NavLink>
            <NavLink to="/contact" className="pill-link">
              Contact
            </NavLink>
          </div>
        </div>

        <div className="hero-image">
          <img src={hero} alt="Krish Kakkar" />
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <section className="page-section">
      <h2>About Me</h2>
      <p>
        I am currently pursuing B.Tech in Computer Science Engineering with
        specialization in Artificial Intelligence & Machine Learning.
      </p>
      <p>
        I enjoy building modern full-stack applications, REST APIs and
        AI-powered software solutions using React, Node.js, Express.js,
        MongoDB and Python.
      </p>
    </section>
  );
}

function SkillsPage() {
  return (
    <section className="page-section">
      <h2>Skills</h2>
      <div className="cards">
        <div className="card">React.js</div>
        <div className="card">Node.js</div>
        <div className="card">Express.js</div>
        <div className="card">MongoDB</div>
        <div className="card">MySQL</div>
        <div className="card">Python</div>
        <div className="card">Flask</div>
        <div className="card">Git & GitHub</div>
      </div>
    </section>
  );
}

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "AI Resume Analyzer",
      tech: "React.js • Node.js • Flask • MongoDB",
      images: [resumeScreenshot1, resumeScreenshot2],
      description:
        "An AI-powered Resume Analyzer that evaluates resumes, provides ATS scores, extracts skills, and recommends improvements. It helps job seekers optimize their resumes for Applicant Tracking Systems.",
    },
    {
  title: "German Automatic Speech Recognition",
  tech: "Python • TensorFlow • Flask",
  images: [germanSS1, germanSS2],
  description:
    "Developed a German speech-to-text system using AI models that converts spoken German into text with high accuracy.",
},
  
   {
  title: "Binance Futures Trading Bot",
  tech: "Python • REST API",
  images: [tradingBotSS],
  description: "Built an automated cryptocurrency futures trading bot using the Binance API."
}
  ];

  return (
    <section className="page-section">
      <h2>Projects</h2>

      <div className="cards">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.tech}</p>

            {project.images && (
              <div className="project-media">
                {project.images.map((img, i) => (
                  <img key={i} src={img} alt={project.title} />
                ))}
              </div>
            )}

            <button
              className="details-btn"
              onClick={() => setSelectedProject(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{selectedProject.title}</h2>

            <p>
              <strong>Tech Stack:</strong> {selectedProject.tech}
            </p>

            <p>{selectedProject.description}</p>

            <button
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
function ContactPage() {
  return (
    <section className="page-section">
      <h2>Contact</h2>
      <p>
        <strong>Email:</strong> krishkakkar17@gmail.com
      </p>
      <p>
        <strong>Phone:</strong> +91 9310990510
      </p>
      <p>
        <strong>Location:</strong> New Delhi, India
      </p>
      <p>
        <strong>GitHub:</strong>{" "}
        <a href="https://github.com/krish24git" target="_blank" rel="noopener noreferrer">
          krish24git
        </a>
      </p>
      <p>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/krish-kakkar-651788289?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noopener noreferrer"
        >
          krish-kakkar-651788289
        </a>
      </p>
    </section>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="container">
        <nav className="navbar">
          <NavLink to="/" className="brand">
            Krish Kakkar
          </NavLink>

          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <footer>
          <p>© 2026 Krish Kakkar | Built with React.js</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;