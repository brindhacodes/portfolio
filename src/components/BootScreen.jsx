import { useEffect, useState } from "react";
import GlitchText from "./GlitchText";

export default function BootScreen() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setActive(false), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  if (!active) return null;

  return (
    <div className="boot-screen" role="status" aria-live="polite">
      <div className="boot-copy">
        <p>SYSTEM WAKE / PORTFOLIO MODE</p>
        <GlitchText as="strong">BRINDHA_S</GlitchText>
        <div className="boot-track"><i /></div>
        <button type="button" onClick={() => setActive(false)}>SKIP_BOOT [ENTER]</button>
      </div>
    </div>
  );
}
