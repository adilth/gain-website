import "./Events.css";
import UpcomingEventsImage from "/images/upcoming-events.webp";
import PressReleasesImage from "/images/press-releases-events.webp";
import BlogArticlesImage from "/images/blog-articles-events.webp";
import MediaCoverageImage from "/images/media-coverage-events.webp";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";

type Event = {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  imageUrl: string;
  locationName?: string;
  addressCountry?: string;
  addressLocality?: string;
  virtualUrl?: string;
  registrationUrl: string;
  price: string;
  currency: string;
  registrationOpens: string;
  registrationCloses: string;
  speakerName: string;
  isVirtual: boolean;
};
const eventSchema = (event: Event) => ({
  "@context": "https://schema.org",
  "@type": "Event",
  name: event.name,
  startDate: event.startDate,
  endDate: event.endDate,
  eventAttendanceMode: event.isVirtual
    ? "https://schema.org/OnlineEventAttendanceMode"
    : "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: event.isVirtual
    ? {
        "@type": "VirtualLocation",
        url: event.virtualUrl,
      }
    : {
        "@type": "Place",
        name: event.locationName,
        address: {
          "@type": "PostalAddress",
          addressCountry: event.addressCountry,
          addressLocality: event.addressLocality,
        },
      },
  image: event.imageUrl,
  description: event.description,
  organizer: {
    "@type": "Organization",
    name: "GAiN NGO - Global Academy Intelligence",
    url: "https://gainorg.com",
  },
  offers: {
    "@type": "Offer",
    url: event.registrationUrl,
    price: event.price,
    priceCurrency: event.currency,
    availability: "https://schema.org/InStock",
    validFrom: event.registrationOpens,
    validThrough: event.registrationCloses,
  },
  performer: {
    "@type": "Person",
    name: event.speakerName,
  },
});
const events = [
  {
    name: "Upcoming Events & Webinars",
    startDate: "2025-06-10T10:00:00Z",
    endDate: "2025-06-10T15:00:00Z",
    isVirtual: true,
    virtualUrl: "https://gainorg.com/webinars",
    imageUrl: UpcomingEventsImage, // Replace with actual image URL or import
    description:
      "Join our upcoming events, webinars, and summits to engage with experts, learn about international issues, and network with like-minded individuals.",
    registrationUrl: "https://gainorg.com/register-upcoming",
    price: "0.00",
    currency: "USD",
    registrationOpens: "2025-05-01T00:00:00Z",
    registrationCloses: "2025-06-09T23:59:59Z",
    speakerName: "Dr. Jane Smith",
  },
  {
    name: "Press Release Announcement",
    startDate: "2025-06-01T08:00:00Z",
    endDate: "2025-06-01T09:00:00Z",
    isVirtual: false,
    locationName: "GAiN HQ",
    addressCountry: "USA",
    addressLocality: "New York",
    imageUrl: PressReleasesImage,
    description:
      "Read our latest press releases to stay informed about significant organizational developments and milestones.",
    registrationUrl: "https://gainorg.com/press-event",
    price: "0.00",
    currency: "USD",
    registrationOpens: "2025-04-25T00:00:00Z",
    registrationCloses: "2025-06-09T23:59:59Z",
    speakerName: "John Doe",
  },
  {
    name: "Thought Leadership Blog Launch",
    startDate: "2025-06-15T12:00:00Z",
    endDate: "2025-06-15T13:30:00Z",
    isVirtual: true,
    virtualUrl: "https://gainorg.com/blog-launch",
    imageUrl: BlogArticlesImage,
    description:
      "Our blog includes articles, leadership pieces, and stories about our work and the communities we serve.",
    registrationUrl: "https://gainorg.com/blog-launch-register",
    price: "0.00",
    currency: "USD",
    registrationOpens: "2025-05-10T00:00:00Z",
    registrationCloses: "2025-06-09T23:59:59Z",
    speakerName: "Emily Chan",
  },
  {
    name: "Media Coverage Showcase",
    startDate: "2025-06-20T14:00:00Z",
    endDate: "2025-06-20T15:30:00Z",
    isVirtual: false,
    locationName: "GAiN Media Center",
    addressCountry: "USA",
    addressLocality: "Washington D.C.",
    imageUrl: MediaCoverageImage,
    description:
      "Discover where we've been featured in the media, showcasing our initiatives and the impact we're having on a global scale.",
    registrationUrl: "https://gainorg.com/media-showcase",
    price: "0.00",
    currency: "USD",
    registrationOpens: "2025-05-15T00:00:00Z",
    registrationCloses: "2025-06-09T23:59:59Z",
    speakerName: "Michael Torres",
  },
];

export default function Events() {
  const eventSchemaJSON = JSON.stringify(eventSchema(events[0]));

  return (
    <>
      <SEO
        title="Events & News | GAiN NGO"
        description="Stay updated with GAiN NGO's latest events, press releases, blog articles, and media coverage. Join our upcoming webinars and summits focused on global humanitarian initiatives."
        keywords={[
          "NGO events",
          "humanitarian conferences",
          "press releases",
          "blog articles",
          "media coverage",
          "webinars",
          "global summits",
        ]}
        canonicalUrl="/events"
      />
      <Helmet>
        <script type="application/ld+json">{eventSchemaJSON}</script>
      </Helmet>
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
                learn about international issues, and network with like-minded
                individuals.
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
                Discover where we've been featured in the media, showcasing our
                initiatives and the impact we're having on a global scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
