import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={(index % 3) * 90}>
      <Tilt className={`project-folder ${project.featured ? "is-featured" : ""} ${open ? "is-open" : ""}`}>
        <button className="project-main" type="button" onClick={() => setOpen(!open)} aria-expanded={open}>
          <span className="folder-tab">{project.type}</span>
          <span className="project-number">PRJ_{String(index + 1).padStart(2, "0")}{project.featured && <b>FEATURED_BUILD</b>}</span>
          <span className="project-title-row"><Icon name="code" size={26} /><strong>{project.title}</strong></span>
          <span className="project-description">{project.description}</span>
          <span className="expand-label"><Icon name="chevron" size={16} /> {open ? "COLLAPSE_FILE" : "OPEN_FILE"}</span>
        </button>
        <div className="project-drawer" aria-hidden={!open} inert={!open}>
          <div><ul>{project.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
        </div>
      </Tilt>
    </Reveal>
  );
}
