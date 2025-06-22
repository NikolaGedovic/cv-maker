import { forwardRef } from "react";
import BottomSectionPreview from "./bottomSectionPreview";
import MiddleSectionCvPreview from "./middleSectionCvPreview";
import TopSectionCvPreview from "./topSectionCvPreview";

// Use forwardRef to allow parent component to attach a ref to this component
const CvPreview = forwardRef(
  (
    {
      name,
      aboutMeText,
      phoneNum,
      email,
      adress,
      website,
      skills,
      educationList,
      experienceList,
    },
    ref // This ref will be passed from the parent (App.js) and assigned to the outermost div
  ) => {
    return (
      <div className="cv-preview" ref={ref}>
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
        <BottomSectionPreview
          educationList={educationList}
          experienceList={experienceList}
        />
      </div>
    );
  }
);

// Export the wrapped component
export default CvPreview;
