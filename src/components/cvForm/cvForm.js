import AboutMe from "./aboutMeForm";
import ContactForm from "./contactForm";

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
    </div>
  );
}
