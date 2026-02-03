import React from "react";
import "./App.css";
import { Globe, Code, FileBadge, Mail, ExternalLink, Cpu, Database, PhoneCall } from "lucide-react";
import HexBackground from "./HexBackground.jsx";




const HtmlIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24">
    <path fill="#E34F26" d="M3 2l1.8 20L12 22l7.2-2L21 2H3z"/>
    <path fill="#fff" d="M12 20l-5.1-1.4L5.6 4h12.8l-1.3 14.6L12 20z"/>
  </svg>
);


/* lowk where the fuck do u put icons */
const CssIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24">
    <path fill="#1572B6" d="M3 2l1.8 20L12 22l7.2-2L21 2H3z"/>
    <path fill="#fff" d="M12 20l-5.1-1.4L5.6 4h12.8l-1.3 14.6L12 20z"/>
  </svg>
);
/* like, is there a specific location or is it always this messy */

const JsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24">
    <rect width="24" height="24" fill="#F7DF1E"/>
    <path d="M6 19l2-1c.4.8.7 1.4 1.6 1.4.8 0 1.3-.3 1.3-1.6v-8h2.3v8c0 2.4-1.4 3.5-3.4 3.5-1.8 0-2.9-.9-3.8-2.3zm9.5-.3c.5.8 1.1 1.3 2.2 1.3.9 0 1.5-.5 1.5-1.1 0-.8-.6-1-1.7-1.5l-.6-.3c-1.8-.8-3-1.7-3-3.7 0-1.8 1.4-3.2 3.6-3.2 1.6 0 2.7.5 3.5 2l-1.9 1.2c-.4-.8-.9-1.1-1.6-1.1s-1.2.4-1.2 1.1c0 .7.5 1 1.5 1.4l.6.3c2.1.9 3.3 1.8 3.3 3.9 0 2.3-1.8 3.5-4.1 3.5-2.3 0-3.7-1.1-4.4-2.5z"/>
  </svg>
);


const ReactIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
  </svg>
);


const AndroidIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill="#3DDC84" d="M17.6 9.5l1.6-2.8-.9-.5-1.7 2.9a7.2 7.2 0 00-5.2 0L9.7 6.2l-.9.5 1.6 2.8A6.6 6.6 0 005.4 15v4a1 1 0 001 1h1v-4h9v4h1a1 1 0 001-1v-4a6.6 6.6 0 00-1.8-5.5z"/>
  </svg>
);

const JavaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill="#007396" d="M8 17c0 1.1 2.2 2 4 2s4-.9 4-2H8zm4-14s2 2 0 4 0 3 0 3 4-2 0-7z"/>
  </svg>
);


const GoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path fill="#00ADD8" d="M3 12c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6s-2.7 6-6 6H9c-3.3 0-6-2.7-6-6z"/>
    <circle cx="10" cy="12" r="1.5" fill="#fff"/>
    <circle cx="14" cy="12" r="1.5" fill="#fff"/>
  </svg>
);




function App() {
  return (
    <div className="portfolio-container">
      <HexBackground />
      <main className="bento-grid">
        {/* TOP LEFT */}
        <div className="hero-card animate-fadeIn">
          <h1 className="hero-name">
            Jouji Okache Ogar 
            <span className="wave-emoji">👋</span>
          </h1>
          <p className="hero-tagline">
            Software Engineering Student <br /> 
            <span className="location">Amsterdam, NL</span>
          </p>
        </div>

        {/* PROJECTS CARD  */}
        <div className="projects-card" id="Projects">
          <div className="card-header-row">
            <h2 className="section-title">Current Works</h2>
            <span className="project-count">03</span>
          </div>
          <div className="project-list">
            <div className="project-item featured-project">
              <div className="project-info">
                <span className="project-category">Web Dev</span>
                <h3>Ogar Golf Spirit</h3>
                <p>Website for my father's non-profit Golf organization, made with HTML, Javascript and CSS.</p>
                <div className="project-tags">
                  <span> Front-end Development </span>
                </div>
              </div>
              <a href="https://ogargolfspirit.com" target="_blank" rel="noreferrer" className="external-btn">
                <ExternalLink size={20}/>
              </a>
            </div>

            <div className="project-item">
              <div className="project-info">
                <span className="project-category">Fullstack</span>
                <h3>Kumori</h3>
                <p>A dynamic weather app, using OpenWeatherMap API, 
                    and geolocation to provide real-time data on the weather.</p>
                <div className="project-tags">
                  <span> Work in progress </span>
                </div>
              </div>
            </div>

            <div className="project-item">
              <div className="project-info">
                <span className="project-category"> Future project </span>
                <h3> Webscraper </h3>
                <p> Developed a real-time web scraping tool that identifies the most in-demand programming languages for job applications, 
                categorizing them by estimated learning time and long-term industry demand to inform skill-building strategies. </p>
                <div className="project-tags">
                  <span> Frontend, Backend, Datascraping </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* BOTTOM LEFT: Skills */}
        <div className="skills-card">
        <h2 className="section-title">Stack</h2>
        <div className="skills-mini-grid">
            <div className="skill-badge"><HtmlIcon /> HTML</div>
            <div className="skill-badge"><CssIcon /> CSS</div>
            <div className="skill-badge"><JsIcon /> JavaScript</div>
            <div className="skill-badge"><ReactIcon /> React</div>
        </div>
        </div>

{/* LEARNING CARD */}
<div className="learning-card">
  <div className="card-header">
    <h2 className="section-title">Current Learning Path</h2>
  </div>
  
  <div className="learning-grid">
    <div className="learning-icon android">
        <AndroidIcon />
            </div>
            <div className="learning-info">
                <span className="subject">Android</span>
            <div className="progress-bar">
        <div className="progress-fill" style={{ width: '0%' }} />
    </div>
  </div>

  <div className="learning-icon Java">
        <JavaIcon />
            </div>
            <div className="learning-info">
                <span className="subject">Java</span>
            <div className="progress-bar">
        <div className="progress-fill" style={{ width: '5%' }} />
    </div>
  </div>

  <div className="learning-icon golang">
        <GoIcon />
            </div>
            <div className="learning-info">
                <span className="subject">Go</span>
            <div className="progress-bar">
        <div className="progress-fill" style={{ width: '0%' }} />
    </div>
  </div>

  </div>
</div>
        <div className="certs-card">
          <h2 className="section-title">Microsoft Credentials</h2>
          <div className="certs-mini-list">
            <div className="cert-item">
              <FileBadge color="#00a4ef" size={20} />
              <span>Azure Fundamentals (AZ-900)</span>
            </div>
            <div className="cert-item">
              <FileBadge color="#f25022" size={20} />
              <span> Microsoft 365 Fundamentals (MS-900)</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="contact-bar" id="Contact">
        <div className="contact-item"><Mail size={20} /> <span>jou.ji357@gmail.com</span></div>
        <div className="contact-item"><PhoneCall size={20} /> <span>Mobile / +31 0620969778</span></div>
      </footer>
    </div>
  );
}

export default App;