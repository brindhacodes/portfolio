import { useEffect, useState } from "react";
import achievements from "../Data/achievements.json";
import certifications from "../Data/certifications.json";
import education from "../Data/education.json";
import experience from "../Data/experience.json";
import links from "../Data/links.json";
import navItems from "../Data/navigation.json";
import participation from "../Data/participation.json";
import projects from "../Data/projects.json";
import skills from "../Data/skills.json";
import BootScreen from "./components/BootScreen";
import CommandLine from "./components/CommandLine";
import GlitchText from "./components/GlitchText";
import Icon from "./components/Icon";
import Navigation from "./components/Navigation";
import PixelRain from "./components/PixelRain";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";
import ScrollProgress from "./components/ScrollProgress";
import SectionHeading from "./components/SectionHeading";
import Tilt from "./components/Tilt";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("home");
  const [isOnline, setIsOnline] = useState(() => typeof navigator === "undefined" || navigator.onLine);

  useEffect(() => {
    const updateConnectionStatus = () => setIsOnline(navigator.onLine);
    window.addEventListener("online", updateConnectionStatus);
    window.addEventListener("offline", updateConnectionStatus);
    return () => {
      window.removeEventListener("online", updateConnectionStatus);
      window.removeEventListener("offline", updateConnectionStatus);
    };
  }, []);

  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <BootScreen />
      <ScrollProgress />
      <Navigation active={active} />
      <aside className="section-dots" aria-label="Section shortcuts">
        {navItems.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? "active" : ""}><span>{label}</span></a>)}
      </aside>

      <main>
        <section
          id="home"
          className="hero"
          onPointerMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            event.currentTarget.style.setProperty("--hero-x", `${event.clientX - rect.left}px`);
            event.currentTarget.style.setProperty("--hero-y", `${event.clientY - rect.top}px`);
          }}
          onPointerLeave={(event) => {
            event.currentTarget.style.setProperty("--hero-x", "50%");
            event.currentTarget.style.setProperty("--hero-y", "48%");
          }}
        >
          <div className="hero-grid" aria-hidden="true" />
          <PixelRain />
          <div className="hero-copy">
            <p className="hero-status" role="status" aria-live="polite">SYSTEM.{isOnline ? "ONLINE" : "OFFLINE"}</p>
            <GlitchText as="h1"><span>SOFTWARE</span><br /><span>DEVELOPER</span></GlitchText>
            <p className="hero-role">&gt; Aspiring Software Engineer · Tech Enthusiast · Problem Solver · Continuous Learner</p>
            <div className="hero-actions">
              <Tilt><a className="primary-action" href="#projects"><Icon name="code" /> VIEW_PROJECTS</a></Tilt>
              <Tilt><a className="secondary-action" href="#contact"><Icon name="mail" /> CONTACT_ME</a></Tilt>
            </div>
            <div className="hero-readout" aria-label="Profile summary">
              <span><b>ROLE</b> WEB DEVELOPER @ KNOW-I</span>
              <span><b>FOCUS</b> WEB &amp; MOBILE DEVELOPMENT / iOS / SYSTEM DESIGN</span>
            </div>
          </div>
          <div className="scroll-cue" aria-hidden="true">SCROLL_TO_EXPLORE <i /></div>
        </section>

        <section id="about" className="dark-section about-section">
          <SectionHeading meta="/USR/BRINDHA/PROFILE.TXT">ABOUT_ME</SectionHeading>
          <Reveal><div className="about-layout">
            <div className="about-index">
              <span>SYSTEM_STATUS</span><strong>{isOnline ? "ONLINE" : "OFFLINE"}</strong>
              <span>PROFILE_TYPE</span><strong>DEVELOPER</strong>
              <pre className="profile-code" aria-label="C plus plus profile code"><code>{`class Brindha S
{
public:

    void code();

    void learn();

    void build();

    void evolve();

    void repeat();
};`}</code></pre>
            </div>
            <div className="about-copy">
              <p className="about-quote">“I turn ideas into code, and code into impactful solutions.”</p>
              <p>I&apos;m <strong>Brindha S</strong>, a Computer Engineering student who sees every app as two things: an experience to make intuitive and a system to understand. That curiosity draws me to <strong>web and mobile development, iOS, and system design</strong>—from the details of a screen to the decisions that keep everything running behind it.</p>
              <p>I love the moment an idea becomes something you can tap, explore, and use. I&apos;m excited to experiment, ask better questions, and build alongside people who care about their craft. With each challenge, I aim to deepen my understanding and create software that feels simple because it&apos;s been thoughtfully built.</p>
            </div>
          </div></Reveal>
        </section>

        <section id="experience" className="dark-section education-section">
          <SectionHeading meta={`${experience.length} ACTIVE ROLE`}>EXPERIENCE_LOG</SectionHeading>
          <div className="education-list">
            {experience.map((record) => (
              <Reveal key={record.code}>
                <Tilt className="education-record">
                  <span className="record-code">{record.code}</span>
                  <h3>{record.role}</h3>
                  <p>{record.company}</p>
                  <div><span>{record.dates}</span><strong>{record.skills}</strong></div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="education" className="dark-section education-section">
          <SectionHeading meta={`${education.length} RECORDS FOUND`}>ACADEMIC_DATA</SectionHeading>
          <div className="education-list">
            {education.map((record, index) => (
              <Reveal key={record.code} delay={index * 100}>
                <Tilt className="education-record">
                  <span className="record-code">{record.code}</span>
                  <h3>{record.institution}</h3>
                  <p>{record.qualification}</p>
                  <div><span>{record.meta}</span><strong>{record.result}</strong></div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section">
          <SectionHeading meta="CAPABILITY MATRIX // LIVE">SYSTEM_CAPABILITIES</SectionHeading>
          <div className="skill-grid">
            {skills.technical.map(({ skill, level }, index) => (
              <Reveal key={skill} delay={(index % 2) * 60}>
                <div className="skill-row">
                  <div><strong>{skill}</strong><span>{level}%</span></div>
                  <div className="skill-track" role="meter" aria-label={`${skill} proficiency`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={level}><i style={{ "--level": `${level}%` }} /></div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal><div className="human-protocols"><strong>HUMAN_PROTOCOLS</strong><div>{skills.soft.map((skill) => <span key={skill}>{skill}</span>)}</div></div></Reveal>
        </section>

        <section id="projects" className="dark-section projects-section">
          <SectionHeading meta={`${projects.length} PROJECT FILES`}>SELECTED_WORK</SectionHeading>
          <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
        </section>

        <section className="dark-section extras-section" aria-label="Certifications, participation and activity highlights">
          <Reveal><div className="records-column">
            <div className="certificate-block">
              <span>CERTIFICATIONS // VERIFIED</span>
              <div className="certification-list">
                {certifications.map((certificate) => (
                  <a className="certification-item" href={certificate.url} target="_blank" rel="noreferrer" key={certificate.name}>
                    <h2>{certificate.name}</h2>
                    <p>{certificate.issuer} · {certificate.issued}</p>
                  </a>
                ))}
              </div>
            </div>
            <div className="participation-block">
              <span>WORKSHOPS &amp; QUIZZES // PARTICIPATION</span>
              <div className="participation-list">
                {participation.map((item) => (
                  <a className="participation-item" href={item.url} target="_blank" rel="noreferrer" key={item.name}>
                    <small>{item.type}</small>
                    <div><h3>{item.name}</h3><p>{item.organizer} · {item.date}</p></div>
                  </a>
                ))}
              </div>
            </div>
          </div></Reveal>
          <Reveal delay={100}><div className="hobbies-block">
            <span>ACTIVITY_LOG</span>
            {achievements.map((achievement) => <p key={achievement}>{achievement}</p>)}
            <div className="offline-modes"><span>OFFLINE_MODES</span>{["Drawing & Painting", "Reading Books", "Building Software Projects", "Learning New Technologies"].map((hobby) => <p key={hobby}>{hobby}</p>)}</div>
          </div></Reveal>
        </section>

        <section id="contact" className="contact-section">
          <div>
            <SectionHeading meta="STATUS // AVAILABLE">ESTABLISH_CONNECTION</SectionHeading>
            <p className="contact-intro">Have a project, opportunity, or interesting problem? Open a channel.</p>
            <div className="contact-links">
              <a href={`mailto:${links.email}`}><span>EMAIL</span><strong>{links.email}</strong><Icon name="arrow" /></a>
              <a href={`tel:${links.phoneHref}`}><span>PHONE</span><strong>{links.phone}</strong><Icon name="arrow" /></a>
              <a href={links.github} target="_blank" rel="noreferrer"><span>GITHUB</span><strong>{links.githubLabel}</strong><Icon name="github" /></a>
              <a href={links.linkedin} target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>{links.linkedinLabel}</strong><Icon name="external" /></a>
            </div>
          </div>
          <CommandLine />
        </section>
      </main>
      <footer className="site-footer"><span>© 2026 BRINDHA S</span><span>BUILT WITH REACT // DESIGNED WITH INTENT</span><a href="#home">RETURN_TO_TOP ↑</a></footer>
    </div>
  );
}
