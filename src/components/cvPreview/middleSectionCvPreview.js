export default function MiddleSectionCvPreview({
  phoneNum,
  email,
  adress,
  website,
  skills = [],
}) {
  return (
    <section className="middle-section">
      <div className="contact-preview">
        <h2 className="headings-preview">Contact Info</h2>
        <p className="contact-display-preview">
          ☎️ {phoneNum || "Phone Number"}
        </p>
        <p className="contact-display-preview">
          📨 {email || "Email@email.com"}
        </p>
        <p className="contact-display-preview">🏠 {adress || "Adress"}</p>
        {website && <p className="contact-display-preview">🛜 {website}</p>}
      </div>
      <div className="skills-preview">
        <h2 className="headings-preview">Skills</h2>
        {skills.length === 0 ? (
          <p>-Skill</p>
        ) : (
          skills.map((skill, index) => <p key={index}>- {skill}</p>)
        )}
      </div>
    </section>
  );
}
