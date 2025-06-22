import MiddleSectionCvPreview from "./middleSectionCvPreview";
import TopSectionCvPreview from "./topSectionCvPreview";

export default function CvPreview({
  name,
  aboutMeText,
  phoneNum,
  email,
  adress,
  website,
  skills,
}) {
  return (
    <div className="cv-preview">
      {/* ********** TOP SECTION ********** */}
      <TopSectionCvPreview name={name} aboutMeText={aboutMeText} />

      {/* ********** MIDDLE SECTION ********** */}

      <MiddleSectionCvPreview
        phoneNum={phoneNum}
        email={email}
        adress={adress}
        website={website}
        skills={skills}
      />

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
