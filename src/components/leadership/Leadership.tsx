import "./Leadership.css";
export default function Leadership() {
  return (
    <section className="leadership" id="partnership">
      <div className="container leadership-container">
        <div className="leadership-content">
          <h2 className="leadership-title">Our Leadership & Team</h2>

          <p className="leadership-text">
            Our team consists of experienced professionals and passionate leaders
            committed to promoting international cooperation. GAIN's team brings together
            a rich history of expertise in addressing key humanitarian challenges. This
            includes, but is not limited to, understanding the cultural dimensions of
            humanitarian issues, perceived causes, coping mechanisms, and help- seeking
            behaviours. Our aim is to enhance our understanding of sociocultural needs in
            Morocco and beyond, providing impactful global solutions.
          </p>

          <p className="leadership-text list">Our areas of expertise include:</p>

          <ul className="expertise-list">
            <li>•Academic Interventions</li>
            <li>•Scientific Research and Vision</li>
            <li>•Assessment and Organizational Evaluation</li>
            <li>•Administrative and Management Consulting</li>
            <li>•Fiscal and Financial Management</li>
            <li>•Global NGO Strategies & Planning</li>
            <li>•Facilitating UN Emergency Responses</li>
          </ul>
        </div>
        <div className="leadership-image">
          <img src="/images/leadershipImage.png" alt="Leadership Team" />
        </div>
      </div>
    </section>
  );
}
