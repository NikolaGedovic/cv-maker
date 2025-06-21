export default function TopSectionCvPreview({ name }) {
  return (
    <section className="top-section">
      <div className="cv-name-preview">{name || "Your name"}</div>
      <div className="about-me-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        nemo debitis consectetur sit soluta quasi deserunt aliquam incidunt
        consequatur laborum culpa qui enim repudiandae placeat, velit amet rem
        aperiam distinctio! Enim, odit sequi deserunt impedit possimus id
        voluptates et labore saepe modi eveniet nemo soluta voluptate dolorum
        facilis laboriosam distinctio. Natus repellat impedit error officia quae
        facilis doloremque facere soluta.
      </div>
    </section>
  );
}
