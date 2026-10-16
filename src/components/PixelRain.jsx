export default function PixelRain() {
  const columns = Array.from({ length: 18 }, (_, index) => ({
    text: ["101101", "BRINDHA", "REACT", "C++", "BUILD", "010011", "தமிழ்", "SHIP"][index % 8],
    left: `${3 + index * 5.6}%`,
    delay: `${-(index % 9) * 1.3}s`,
    duration: `${10 + (index % 6)}s`,
  }));

  return (
    <div className="pixel-rain" aria-hidden="true">
      {columns.map((column, index) => (
        <span key={index} style={{ left: column.left, animationDelay: column.delay, animationDuration: column.duration }}>
          {column.text.repeat(8)}
        </span>
      ))}
    </div>
  );
}
