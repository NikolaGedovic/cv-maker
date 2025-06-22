import BottomSectionPreview from "./bottomSectionPreview";
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
  educationList,
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

      <BottomSectionPreview educationList={educationList} />
    </div>
  );
}
