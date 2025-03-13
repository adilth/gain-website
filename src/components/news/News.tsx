import "./News.css";
export default function News() {
  return (
    <section className="programs section" id="events">
      <div className="container">
        <div className="programs-grid">
          {/* Featured Programs Column */}
          <div className="program-column">
            <img
              src="/images/conference-hall.webp"
              alt="International conference"
              className="program-image"
            />
            <h3 className="column-title">Featured Programs & Initiatives</h3>

            <div className="program-item">
              <h4>•International Conferences & Summits:</h4>
              <p>
                We Host Global Events Addressing Pressing International Issues, Such As
                Climate Change, Immigration, Autism, Diplomacy, And Human Rights.
              </p>
            </div>

            <div className="program-item">
              <h4>•Cultural Exchange Programs:</h4>
              <p>
                We Connect Individuals Across Cultures Through Educational Exchanges And
                Collaborative Projects.
              </p>
            </div>

            <div className="program-item">
              <h4>•Humanitarian & Development Projects:</h4>
              <p>
                Our Programs Provide Critical Aid To Communities Affected By Poverty,
                Conflict, And Natural Disasters.
              </p>
            </div>

            <a href="/programs" className="learn-more">
              Learn More <span className="arrow">›</span>
            </a>
          </div>

          {/* Call-To-Action Column */}
          <div className="program-column">
            <img
              src="/images/classroom.webp"
              alt="Classroom setting"
              className="program-image"
            />
            <h3 className="column-title">Call-To-Action</h3>

            <div className="program-item">
              <h4>•Donate:</h4>
              <p>Help Support Our Mission By Making A Donation To Fund Our Programs.</p>
            </div>

            <div className="program-item">
              <h4>•Join:</h4>
              <p>
                Become A Member And Be Part Of A Global Network Working Towards Positive
                Change.
              </p>
            </div>

            <div className="program-item">
              <h4>•Learn More:</h4>
              <p>Explore Our Programs And Initiatives To See How You Can Contribute.</p>
            </div>

            <a href="/action" className="learn-more">
              Learn More <span className="arrow">›</span>
            </a>
          </div>

          {/* Latest News Column */}
          <div className="program-column">
            <img
              src="/images/collaboration.webp"
              alt="People collaborating"
              className="program-image"
            />
            <h3 className="column-title">Latest News And Updates</h3>

            <div className="news-content">
              <p>
                Informed About Our Recent Activities, Program Launches, And Upcoming
                Events. Check Our Blog For The Latest Stories From The Field.
              </p>
            </div>

            <a href="/news" className="learn-more">
              Learn More <span className="arrow">›</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
