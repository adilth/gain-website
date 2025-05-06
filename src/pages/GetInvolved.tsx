import "./GetInvolved.css";
import MemberImage from "/images/Groupe de masques 54.webp";
import CareerImage from "/images/Groupe de masques 55.webp";
import VolunteerImage from "/images/Groupe de masques 56.webp";
import InternshipImage from "/images/Groupe de masques 57.webp";
import SEO from "../components/SEO";

export default function GetInvolved() {
  return (
    <>
      <SEO
        title="Get Involved | GAiN NGO"
        description="Make a difference with GAiN NGO. Join our community as a member, volunteer, intern, or team member. Help us create sustainable impact through humanitarian initiatives."
        keywords={[
          "volunteer opportunities",
          "NGO membership",
          "humanitarian careers",
          "internship program",
          "community involvement",
          "make a difference",
          "join NGO",
        ]}
        canonicalUrl="/get-involved"
      />
      <div className="get-involved-page container">
        <h1 className="page-title">Get Involved</h1>
        <div className="involved-grid">
          <div className="involved-card">
            <img src={MemberImage} alt="Become A Member" />
            <h2>Become A Member</h2>
            <p>
              Join our community of global changemakers! As a member, you'll receive
              exclusive updates, invitations to events, and the opportunity to engage in
              our initiatives.
            </p>
          </div>

          <div className="involved-card">
            <img src={CareerImage} alt="Career Opportunities" />
            <h2>Career Opportunities</h2>
            <p>
              We are always looking for passionate individuals to join our team. Explore
              our current job openings and contribute to our mission of global change.
            </p>
          </div>

          <div className="involved-card">
            <img src={VolunteerImage} alt="Volunteer" />
            <h2>Volunteer</h2>
            <p>
              Help us make an impact by volunteering your time and skills in various
              programs. Whether on-site or virtually, there are many ways to get involved.
            </p>
          </div>

          <div className="involved-card">
            <img src={InternshipImage} alt="Internships" />
            <h2>Internships</h2>
            <p>
              Gain hands-on experience and contribute to global initiatives through our
              internship programs. Learn and grow while making a difference.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
