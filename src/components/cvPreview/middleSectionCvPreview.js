export default function MiddleSectionCvPreview({
  phoneNum,
  email,
  adress,
  website,
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
        <p>-Skill</p>
        <p>-Skill</p>
        <p>-Skill</p>
        <p>-Skill</p>
        <p>-Skill</p>
      </div>
    </section>
  );
}
