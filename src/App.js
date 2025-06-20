import CvForm from "./components/cvForm/cvForm";
import CvPreview from "./components/cvPreview/cvPreview";

export default function App() {
  return (
    <>
      <PageHeading />
      <div className="container">
        <CvForm />
        <CvPreview />
      </div>
    </>
  );
}

function PageHeading() {
  return <h1>CV Maker</h1>;
}
