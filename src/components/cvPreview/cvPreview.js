export default function CvPreview() {
  return (
    <div className="cv-preview">
      {/* ********** TOP SECTION ********** */}

      <section className="top-section">
        <div className="cv-name-preview">Name Here</div>
        <div className="about-me-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          nemo debitis consectetur sit soluta quasi deserunt aliquam incidunt
          consequatur laborum culpa qui enim repudiandae placeat, velit amet rem
          aperiam distinctio! Enim, odit sequi deserunt impedit possimus id
          voluptates et labore saepe modi eveniet nemo soluta voluptate dolorum
          facilis laboriosam distinctio. Natus repellat impedit error officia
          quae facilis doloremque facere soluta.
        </div>
      </section>

      {/* ********** MIDDLE SECTION ********** */}

      <section className="middle-section">
        <div className="contact-preview">
          <h2 className="headings-preview">Contact Info</h2>
          <p>☎️ Phone Number</p>
          <p>📨 Email@email.com</p>
          <p>🏠 Adress</p>
          <p>🛜 Website</p>
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

      {/* ********** BOTTOM SECTION ********** */}

      <section className="bottom-section">
        <div className="education-preview">
          <h2 className="headings-preview">Education</h2>

          <div className="education-section-preview">
            <div className="left-side-education-section">
              <p className="school-name">School name</p>
              <p className="subject">Subject</p>
            </div>
            <div className="left-side-education-section">
              <p>From - To</p>
            </div>
          </div>

          <div className="education-section-preview">
            <div className="left-side-education-section">
              <p className="school-name">School name</p>
              <p className="subject">Subject</p>
            </div>
            <div className="left-side-education-section">
              <p>From - To</p>
            </div>
          </div>

          <div className="education-section-preview">
            <div className="left-side-education-section">
              <p className="school-name">School name</p>
              <p className="subject">Subject</p>
            </div>
            <div className="left-side-education-section">
              <p>From - To</p>
            </div>
          </div>

          <div className="education-section-preview">
            <div className="left-side-education-section">
              <p className="school-name">School name</p>
              <p className="subject">Subject</p>
            </div>
            <div className="left-side-education-section">
              <p>From - To</p>
            </div>
          </div>
        </div>
        <div className="experience-preview">
          <h2 className="headings-preview">Experience</h2>

          <div className="experience-preview-section">
            <div className="experience-preview-top">
              <div>
                <p className="company-name">Company</p>
                <p>Position</p>
              </div>
              <div>
                <p>From - To</p>
              </div>
            </div>
            <div className="experience-preview-bottom">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                possimus facere itaque placeat aliquid corporis autem,
                repudiandae
              </p>
            </div>
          </div>

          <div className="experience-preview-section">
            <div className="experience-preview-top">
              <div>
                <p className="company-name">Company</p>
                <p>Position</p>
              </div>
              <div>
                <p>From - To</p>
              </div>
            </div>
            <div className="experience-preview-bottom">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                possimus facere itaque placeat aliquid corporis autem,
                repudiandae
              </p>
            </div>
          </div>

          <div className="experience-preview-section">
            <div className="experience-preview-top">
              <div>
                <p className="company-name">Company</p>
                <p>Position</p>
              </div>
              <div>
                <p>From - To</p>
              </div>
            </div>
            <div className="experience-preview-bottom">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
                possimus facere itaque placeat aliquid corporis autem,
                repudiandae
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
