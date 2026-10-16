import { useState } from "react";
import links from "../../Data/links.json";

export default function CommandLine() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("TYPE 'HELP' TO LIST COMMANDS.");

  const run = (event) => {
    if (event.key !== "Enter") return;
    const command = input.trim().toLowerCase();
    const actions = {
      help: "COMMANDS: ABOUT, EXPERIENCE, PROJECTS, SKILLS, CONTACT, GITHUB, LINKEDIN, CLEAR",
      about: () => { window.location.hash = "about"; return "OPENING ABOUT RECORD..."; },
      experience: () => { window.location.hash = "experience"; return "READING EXPERIENCE LOG..."; },
      projects: () => { window.location.hash = "projects"; return "MOUNTING PROJECT DIRECTORY..."; },
      skills: () => { window.location.hash = "skills"; return "READING CAPABILITY MATRIX..."; },
      contact: () => { window.location.hash = "contact"; return "OPENING CONNECTION CHANNELS..."; },
      github: () => { window.open(links.github, "_blank", "noopener,noreferrer"); return "OPENING GITHUB..."; },
      linkedin: () => { window.open(links.linkedin, "_blank", "noopener,noreferrer"); return "OPENING LINKEDIN..."; },
      clear: "",
    };
    const action = actions[command];
    setOutput(typeof action === "function" ? action() : action ?? `UNKNOWN COMMAND: ${command || "[EMPTY]"}`);
    setInput("");
  };

  return (
    <div className="command-line">
      <div className="command-output">&gt; {output}</div>
      <label><span>BRINDHA@PORTFOLIO:~$</span><input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={run} placeholder="enter command" aria-label="Portfolio command" spellCheck="false" /></label>
    </div>
  );
}
