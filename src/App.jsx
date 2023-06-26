/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Navbar, Footer } from "./components/boilerplate.jsx";
import Cv from "./components/cv.jsx";
import { AddBtnSet } from "./components/addElementBtn.jsx";
import uniqid from "uniqid";

function App() {
  const [education, setEducation] = useState([]);
  const [references, setReferences] = useState([]);
  const [workHistory, setWorkHistory] = useState([]);
  const [skills, setSkills] = useState([]);

  function educationalExperience() {
    return {
      major: "",
      institution: "",
      years: "",
      id: uniqid(),
    };
  }

  function individualReference() {
    return {
      refName: "",
      position: "",
      contact: "",
      id: uniqid(),
    };
  }

  function workExperience() {
    return {
      years: "",
      position: "",
      company: "",
      description: "",
      id: uniqid(),
    };
  }

  function skill() {
    return {
      skillName: "",
      familiarity: "",
      id: uniqid(),
    };
  }

  useEffect(() => {
    incValue(educationalExperience(), education, setEducation);
    incValue(individualReference(), references, setReferences);
    incValue(workExperience(), workHistory, setWorkHistory);
    incValue(skill(), skills, setSkills);
  }, []);

  function incValue(factory, valueToUpdate, argToStore) {
    console.log(valueToUpdate);
    argToStore(valueToUpdate.concat(factory));
    console.log("adding element");
  }

  function decValue(valueToUpdate, argToStore) {
    console.log(valueToUpdate);
    if (argToStore.length > 0) {
      console.log("attempting to remove element");
      argToStore(valueToUpdate.slice(0, -1));
      console.log(valueToUpdate);

      console.log("removing element");
    }
  }

  return (
    <>
      <Navbar />
      <p style={{ alignSelf: "center" }}>
        To begin editing your CV click on any item below
      </p>
      <Cv
        education={education}
        references={references}
        workHistory={workHistory}
        skills={skills}
      />
      <div className="add-btn-wrapper flexrow">
        <AddBtnSet
          textValue={"Education " + education.length}
          incValue={() => incValue(educationalExperience, education, setEducation)}
          decValue={() => decValue(education, setEducation)}
        />
        <AddBtnSet
          textValue={"References " + references.length}
          incValue={() => incValue(individualReference, references, setReferences)}
          decValue={() => decValue(references, setReferences)}
        />
        <AddBtnSet
          textValue={"Work Experience " + workHistory.length}
          incValue={() => incValue(workExperience, workHistory, setWorkHistory)}
          decValue={() => decValue(workHistory, setWorkHistory)}
        />
        <AddBtnSet
          textValue={"Skills " + skills.length}
          incValue={() => incValue(skill, skills, setSkills)}
          decValue={() => decValue(skills, setSkills)}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
