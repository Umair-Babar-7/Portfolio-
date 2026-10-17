"use client";

const topics = [
  "Machine learning",
  "Python development",
  "Data storytelling",
  "Thoughtful solutions",
];

export function ExpertiseMarquee() {
  return (
    <div className="expertise-marquee" aria-label={topics.join(", ")}>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1, 2, 3].map((copy) => (
          <div className="marquee-group" key={copy}>
            {topics.map((topic) => (
              <span key={topic}>
                <i>✳</i>
                {topic}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
