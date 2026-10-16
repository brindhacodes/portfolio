import { useRef } from "react";

export default function Tilt({ children, className = "" }) {
  const ref = useRef(null);

  const move = (event) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    ref.current.style.setProperty("--rx", `${((y - rect.height / 2) / rect.height) * -5}deg`);
    ref.current.style.setProperty("--ry", `${((x - rect.width / 2) / rect.width) * 7}deg`);
    ref.current.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    ref.current.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  };

  const reset = () => {
    if (!ref.current) return;
    ref.current.style.setProperty("--rx", "0deg");
    ref.current.style.setProperty("--ry", "0deg");
  };

  return <div ref={ref} onMouseMove={move} onMouseLeave={reset} className={`tilt ${className}`}>{children}</div>;
}
