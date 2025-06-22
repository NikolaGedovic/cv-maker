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
        />
        <CvPreview
          name={name}
          aboutMeText={aboutMeText}
          phoneNum={phoneNum}
          email={email}
          adress={adress}
          website={website}
        />
      </div>
    </>
  );
}

function PageHeading() {
  return <h1>CV Maker</h1>;
}
