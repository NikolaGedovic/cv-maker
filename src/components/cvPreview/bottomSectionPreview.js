export default function BottomSectionPreview({ educationList }) {
  return (
    <section className="bottom-section">
      {/* ******* Education ******** */}
      <div className="education-preview">
        <h2 className="headings-preview">Education</h2>

        {educationList.length === 0 ? (
          <p className="no-education">No education added.</p>
        ) : (
          educationList.map((edu, index) => (
            <div className="education-section-preview" key={index}>
              <div className="left-side-education-section">
                <p className="school-name">{edu.schoolName}</p>
                <p className="subject">{edu.subject}</p>
              </div>
              <div className="left-side-education-section">
                <p>
                  {edu.fromYear} - {edu.toYear}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ********* Experience ************* */}

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
              possimus facere itaque placeat aliquid corporis autem, repudiandae
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
              possimus facere itaque placeat aliquid corporis autem, repudiandae
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
              possimus facere itaque placeat aliquid corporis autem, repudiandae
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
