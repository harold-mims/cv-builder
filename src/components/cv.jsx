import AboutMe from "./aboutMe";
import ContactInfo from "./contactInfo";
import NameTitle from "./nameTitle";
import { ChangableImage } from "./editableComponent";

export default function Cv() {
  return (
    <div className="cv-wrapper">
      <div className="cvLeftColumn">
        <ChangableImage src="../../public/placeholder_icon.jpg" />
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
      <div className="cvRightColumn">
        <NameTitle />
        <AboutMe />
      </div>
    </div>
  );
}
