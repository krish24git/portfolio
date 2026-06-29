import "./App.css";
import hero from "./assets/hero .png";

function App() {
  return (
    <div className="container">

      <nav className="navbar">
        <h2>Krish Kakkar</h2>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">

        <div className="hero-text">

          <h3>Hello, I'm</h3>

          <h1>Krish Kakkar</h1>

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
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        <div className="hero-image">

          <img src={hero} alt="Krish Kakkar" />

        </div>

      </section>

      <section id="about">

        <h2>About Me</h2>

        <p>
          I am currently pursuing B.Tech in Computer Science Engineering with
          specialization in Artificial Intelligence & Machine Learning.

          I enjoy building modern full-stack applications, REST APIs and
          AI-powered software solutions using React, Node.js, Express.js,
          MongoDB and Python.
        </p>

      </section>

      <section id="skills">

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

      <section id="projects">

        <h2>Projects</h2>

        <div className="cards">

          <div className="project">
            <h3>AI Resume Analyzer</h3>
            <p>React.js • Node.js • Flask • MongoDB</p>
          </div>

          <div className="project">
            <h3>German Automatic Speech Recognition</h3>
            <p>Python • TensorFlow • Flask</p>
          </div>

          <div className="project">
            <h3>Binance Futures Trading Bot</h3>
            <p>Python • REST API</p>
          </div>

        </div>

      </section>

      <section id="contact">

        <h2>Contact</h2>

        <p><strong>Email:</strong> krishkakkar17@gmail.com</p>

        <p><strong>Phone:</strong> +91 9310990510</p>

        <p><strong>Location:</strong> New Delhi, India</p>

      </section>

      <footer>

        <p>© 2026 Krish Kakkar | Built with React.js</p>

      </footer>

    </div>
  );
}

export default App;