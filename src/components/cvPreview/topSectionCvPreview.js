export default function TopSectionCvPreview({ name, aboutMeText }) {
  return (
    <section className="top-section">
      <div className="cv-name-preview">{name || "No name added."}</div>
      <div className="about-me-text">
        {aboutMeText || "No description added."}
      </div>
    </section>
  );
}
