export default function TopSectionCvPreview({ name, aboutMeText }) {
  return (
    <section className="top-section">
      <div className="cv-name-preview">{name || "Your name"}</div>
      <div className="about-me-text">
        {aboutMeText ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nemo debitis consectetur sit soluta quasi deserunt aliquam incidunt        consequatur laborum culpa qui enim repudiandae placeat, velit amet rem"}
      </div>
    </section>
  );
}
