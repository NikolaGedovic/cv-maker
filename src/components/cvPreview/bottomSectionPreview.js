export default function BottomSectionPreview({
  educationList,
  experienceList,
}) {
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

        {experienceList.length === 0 ? (
          <p className="no-experience">No experience added.</p>
        ) : (
          experienceList.map((exp, index) => (
            <div className="experience-preview-section" key={index}>
              <div className="experience-preview-top">
                <div>
                  <p className="company-name">{exp.company}</p>
                  <p className="company-position">{exp.position}</p>
                </div>
                <div>
                  <p className="company-years">
                    {exp.fromYearExperience} - {exp.toYearExperience}
                  </p>
                </div>
              </div>
              <div className="experience-preview-bottom">
                <p>{exp.whatYouDid}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
