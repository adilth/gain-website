import "./vision.css";
import visionImg from "/images/vison-img.webp";

export default function Vision() {
  return (
    <section className="vision section" id="vision">
      <div className="container">
        <h3 className="vision-title">Vision 2030 & Beyond</h3>
        <p className="sub-title">
          A future where Africa leads with integrity, intelligence, and inclusion.
        </p>
        <div className="img-wrapper">
          <img src={visionImg} alt="our vision group look to future to leads" />
        </div>
      </div>
    </section>
  );
}
