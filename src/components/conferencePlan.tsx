interface Props {
  onGetStarted: () => void;
}

export default function ConferencePlan({ onGetStarted }: Props) {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-left">
          <h1>Conference Expense Planner</h1>
          <p>Come Join us!</p>
          <button className="get-started-btn" onClick={onGetStarted}>
            Get Started
          </button>
        </div>

        <div className="landing-right">
          <p>
            Welcome to <strong>Aura & Co.</strong>, a curated space designed for connection, elevated thinking,
            and purposeful growth. We value depth over noise, crafting an intentional experience that leaves a lasting impression.

Blending creativity with strategy, we bring together visionaries and innovators to share ideas, foster community, and shape the future of our industry.
          </p>
          <p>
            With a commitment to efficiency and innovation, we empower individuals and
            businesses to take control of their finances and achieve their goals with
            ease.
          </p>
          <p>
           At Aura & Co., our mission is simple: to create an inspiring environment where great minds meet.
           Whether you are a founder, a creative, or a lifelong learner, join us for a weekend of thoughtful
           dialogue and genuine connection.
          </p>
        </div>
      </div>
    </div>
  );
}