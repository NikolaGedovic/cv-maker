import { useState } from "react";
import CvForm from "./components/cvForm/cvForm";
import CvPreview from "./components/cvPreview/cvPreview";

export default function App() {
  const [name, setName] = useState("");
  const [aboutMeText, setAboutMeText] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [website, setWebsite] = useState("");
  const [skills, setSkills] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [educationList, setEducationList] = useState([]);
  const [currentEducation, setCurrentEducation] = useState({
    schoolName: "",
    subject: "",
    fromYear: "",
    toYear: "",
  });
  const [experienceList, setExperienceList] = useState([]);
  const [currentExperience, setCurrentExperience] = useState({
    company: "",
    position: "",
    fromYearExperience: "",
    toYearExperience: "",
    whatYouDid: "",
  });
  return (
    <>
      <PageHeading />
      <div className="container">
        <CvForm
          name={name}
          setName={setName}
          aboutMeText={aboutMeText}
          setAboutMeText={setAboutMeText}
          phoneNum={phoneNum}
          setPhoneNum={setPhoneNum}
          email={email}
          setEmail={setEmail}
          adress={adress}
          setAdress={setAdress}
          website={website}
          setWebsite={setWebsite}
          skills={skills}
          setSkills={setSkills}
          currentSkill={currentSkill}
          setCurrentSkill={setCurrentSkill}
          educationList={educationList}
          setEducationList={setEducationList}
          currentEducation={currentEducation}
          setCurrentEducation={setCurrentEducation}
          experienceList={experienceList}
          setExperienceList={setExperienceList}
          currentExperience={currentExperience}
          setCurrentExperience={setCurrentExperience}
        />
        <CvPreview
          name={name}
          aboutMeText={aboutMeText}
          phoneNum={phoneNum}
          email={email}
          adress={adress}
          website={website}
          skills={skills}
          educationList={educationList}
          experienceList={experienceList}
        />
      </div>
    </>
  );
}

function PageHeading() {
  return <h1>CV Maker</h1>;
}
