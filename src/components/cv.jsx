/* eslint-disable react/prop-types */
import AboutMe from "./aboutMe";
import ContactInfo from "./contactInfo";
import NameTitle from "./nameTitle";
import { ChangableImage } from "./editableComponent";
import Education from "./education";
import References from "./references";
import WorkHistory from "./workExperience";
import Skills from "./skills";

function Cv({ education, references, workHistory, skills }) {
  return (
    <div className="cv-wrapper">
      <div className="cvLeftColumn flexcol">
        <ChangableImage src="./placeholder_icon.jpg" />
        <Education education={education} />
        <References references={references} />
        <div className="contactWrapper">
          <ContactInfo contactMethod="Phone" defaultValue="+1 (555) 555-5555" />
          <ContactInfo contactMethod="Email" defaultValue="example@email.com" />
          <ContactInfo
            contactMethod="Website"
            defaultValue="theodinproject.com"
          />
          <ContactInfo
            contactMethod="Address"
            defaultValue="your street address"
          />
        </div>
      </div>
      <div className="cvRightColumn flexcol">
        <NameTitle />
        <AboutMe />
        <WorkHistory workHistory={workHistory} />
        <Skills skills={skills} />
      </div>
    </div>
  );
}

export default Cv;
