import "./Events.css";
import UpcomingEventsImage from "/images/upcoming-events.webp";
import PressReleasesImage from "/images/press-releases-events.webp";
import BlogArticlesImage from "/images/blog-articles-events.webp";
import MediaCoverageImage from "/images/media-coverage-events.webp";

export default function Events() {
  return (
    <div className="events-page">
      <div className="events-header">
        <h1>Events & News</h1>
      </div>
      <div className="container">
        <div className="events-grid">
          <div className="event-card">
            <img src={UpcomingEventsImage} alt="Upcoming" />
            <h2>Upcoming</h2>
            <p>
              Join our upcoming events, webinars, and summits to engage with experts,
              learn about international issues, and network with like-minded individuals.
            </p>
          </div>

          <div className="event-card">
            <img src={PressReleasesImage} alt="Press Releases" />
            <h2>Press Releases</h2>
            <p>
              Read our latest press releases to stay informed about significant
              organizational developments and milestones.
            </p>
          </div>

          <div className="event-card">
            <img src={BlogArticlesImage} alt="Blog & Articles" />
            <h2>Blog & Articles</h2>
            <p>
              Our blog includes articles, leadership pieces, and stories about our work
              and the communities we serve.
            </p>
          </div>

          <div className="event-card">
            <img src={MediaCoverageImage} alt="Media Coverage" />
            <h2>Media Coverage</h2>
            <p>
              Discover where we've been featured in the media, showcasing our initiatives
              and the impact we're having on a global scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
