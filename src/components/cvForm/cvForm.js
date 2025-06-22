import AboutMe from "./aboutMeForm";
import ContactForm from "./contactForm";
import EducationForm from "./educationForm";
import ExperienceForm from "./experienceForm";
import SkillsForm from "./skillsForm";

export default function CvForm({
  name,
  setName,
  aboutMeText,
  setAboutMeText,
  phoneNum,
  setPhoneNum,
  email,
  setEmail,
  adress,
  setAdress,
  website,
  setWebsite,
  skills,
  setSkills,
  currentSkill,
  setCurrentSkill,
  educationList,
  setEducationList,
  currentEducation,
  setCurrentEducation,
  experienceList,
  setExperienceList,
  currentExperience,
  setCurrentExperience,
}) {
  return (
    <div className="cv-form">
      <AboutMe
        name={name}
        setName={setName}
        aboutMeText={aboutMeText}
        setAboutMeText={setAboutMeText}
      />
      <ContactForm
        phoneNum={phoneNum}
        setPhoneNum={setPhoneNum}
        email={email}
        setEmail={setEmail}
        adress={adress}
        setAdress={setAdress}
        website={website}
        setWebsite={setWebsite}
      />
      <SkillsForm
        skill={currentSkill}
        setSkill={setCurrentSkill}
        skills={skills}
        setSkills={setSkills}
      />

      <EducationForm
        educationList={educationList}
        setEducationList={setEducationList}
        currentEducation={currentEducation}
        setCurrentEducation={setCurrentEducation}
      />

      <ExperienceForm
        experienceList={experienceList}
        setExperienceList={setExperienceList}
        currentExperience={currentExperience}
        setCurrentExperience={setCurrentExperience}
      />
    </div>
  );
}
