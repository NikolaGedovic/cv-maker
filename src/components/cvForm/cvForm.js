import AboutMe from "./aboutMe";

export default function CvForm({ name, setName, aboutMeText, setAboutMeText }) {
  return (
    <div className="cv-form">
      <AboutMe
        name={name}
        setName={setName}
        aboutMeText={aboutMeText}
        setAboutMeText={setAboutMeText}
      />
    </div>
  );
}
