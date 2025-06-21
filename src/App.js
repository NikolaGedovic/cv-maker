import { useState } from "react";
import CvForm from "./components/cvForm/cvForm";
import CvPreview from "./components/cvPreview/cvPreview";

export default function App() {
  const [name, setName] = useState("");
  return (
    <>
      <PageHeading />
      <div className="container">
        <CvForm name={name} setName={setName} />
        <CvPreview name={name} />
      </div>
    </>
  );
}

function PageHeading() {
  return <h1>CV Maker</h1>;
}
