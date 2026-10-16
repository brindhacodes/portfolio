import { useState } from "react";
import links from "../../Data/links.json";

export default function CommandLine() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("TYPE 'HELP' TO LIST COMMANDS.");

  const openSection = (id, message) => () => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    return message;
  };

  const run = (event) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    const actions = {
      help: "COMMANDS:\nHOME\nABOUT\nEXPERIENCE\nEDUCATION\nSKILLS\nPROJECTS\nCONTACT\nGITHUB\nLINKEDIN\nCLEAR",
      home: openSection("home", "RETURNING TO HOME..."),
      about: openSection("about", "OPENING ABOUT RECORD..."),
      experience: openSection("experience", "READING EXPERIENCE LOG..."),
      education: openSection("education", "READING ACADEMIC DATA..."),
      skills: openSection("skills", "READING CAPABILITY MATRIX..."),
      projects: openSection("projects", "MOUNTING PROJECT DIRECTORY..."),
      contact: openSection("contact", "OPENING CONNECTION CHANNELS..."),
      github: () => { window.open(links.github, "_blank", "noopener,noreferrer"); return "OPENING GITHUB..."; },
      linkedin: () => { window.open(links.linkedin, "_blank", "noopener,noreferrer"); return "OPENING LINKEDIN..."; },
      clear: "TERMINAL CLEARED. TYPE 'HELP' TO LIST COMMANDS.",
    };
    const action = actions[command];
    setOutput(typeof action === "function" ? action() : action ?? `UNKNOWN COMMAND: ${command || "[EMPTY]"}`);
    setInput("");
  };

  return (
    <div className="command-line">
      <div className="command-output" role="status" aria-live="polite">&gt; {output}</div>
      <form onSubmit={run}>
        <div className="command-entry">
          <label htmlFor="portfolio-command">BRINDHA@PORTFOLIO:~$</label>
          <input id="portfolio-command" value={input} onChange={(event) => setInput(event.target.value)} placeholder="enter command" aria-label="Portfolio terminal command" autoComplete="off" enterKeyHint="send" spellCheck="false" />
          <button className="command-submit" type="submit" tabIndex="-1" aria-hidden="true">Run command</button>
        </div>
      </form>
    </div>
  );
}
