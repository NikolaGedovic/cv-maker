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
          ☎️ {phoneNum || "No number added."}
        </p>
        <p className="contact-display-preview">
          📨 {email || "No email added."}
        </p>
        <p className="contact-display-preview">
          🏠 {adress || "No adress added."}
        </p>
        {website && <p className="contact-display-preview">🛜 {website}</p>}
      </div>
      <div className="skills-preview">
        <h2 className="headings-preview">Skills</h2>
        {skills.length === 0 ? (
          <p className="no-skills">No skills added.</p>
        ) : (
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
