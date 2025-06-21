import { useState } from "react";
import CvForm from "./components/cvForm/cvForm";
import CvPreview from "./components/cvPreview/cvPreview";

export default function App() {
  const [name, setName] = useState("");
  const [aboutMeText, setAboutMeText] = useState("");
  return (
    <>
      <PageHeading />
      <div className="container">
        <CvForm
          name={name}
          setName={setName}
          aboutMeText={aboutMeText}
          setAboutMeText={setAboutMeText}
        />
        <CvPreview name={name} aboutMeText={aboutMeText} />
      </div>
    </>
  );
}

function PageHeading() {
  return <h1>CV Maker</h1>;
}
