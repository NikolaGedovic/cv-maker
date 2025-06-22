import { useState } from "react";
import CvForm from "./components/cvForm/cvForm";
import CvPreview from "./components/cvPreview/cvPreview";
import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function App() {
  const cvRef = useRef();
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

  const handleDownload = () => {
    const input = cvRef.current;
    if (!input) return;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("my_cv.pdf");
    });
  };

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
          handleDownload={handleDownload}
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
          ref={cvRef}
        />
      </div>
      <Footer />
    </>
  );
}

function PageHeading() {
  return <h1>CV Maker</h1>;
}

function Footer() {
  return (
    <footer>
      Made By <span>Nikola Gedovic</span>
    </footer>
  );
}
