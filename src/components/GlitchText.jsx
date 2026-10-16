function extractText(value) {
  if (Array.isArray(value)) return value.map(extractText).join(" ");
  if (typeof value === "string" || typeof value === "number") return String(value);
  if (value?.props?.children) return extractText(value.props.children);
  return "";
}

export default function GlitchText({ children, as: Tag = "span", className = "" }) {
  const plainText = extractText(children).replace(/\s+/g, " ").trim();
  return <Tag className={`glitch-text ${className}`} data-text={plainText}>{children}</Tag>;
}
