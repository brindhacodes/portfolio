import { useEffect, useState } from "react";
import navItems from "../../Data/navigation.json";

export default function Navigation({ active }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <a className="brand glitch-text" data-text="BRINDHA_S" href="#home">BRINDHA_S</a>
      <span className="online"><i /> SYSTEM.ONLINE</span>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>MENU_{open ? "CLOSE" : "OPEN"}</button>
      <nav id="site-nav" className={open ? "is-open" : ""} aria-label="Primary navigation">
        {navItems.map(([id, label]) => (
          <a key={id} className={active === id ? "active" : ""} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
