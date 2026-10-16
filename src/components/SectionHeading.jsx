import GlitchText from "./GlitchText";

export default function SectionHeading({ children, meta }) {
  return <div className="section-heading"><GlitchText as="h2">{children}</GlitchText>{meta && <span>{meta}</span>}</div>;
}
