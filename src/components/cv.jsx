import AboutMe from "./aboutMe";
import ContactInfo from "./contactInfo";
import { InlineEditable, MultilineEditable, } from "./editableComponent";

export default function Cv() {
  return (
    <div className="cv-wrapper">
      <div className="cvLeftColumn">
        <ContactInfo contactMethod="Phone" defaultValue="+1 (555) 555-5555" />
        <ContactInfo contactMethod="Email" defaultValue="example@email.com" />
        <ContactInfo contactMethod="Website" defaultValue="theodinproject.com" />
        <ContactInfo contactMethod="Address" defaultValue="your street address" />
        <InlineEditable />
        <MultilineEditable />
      </div>
      <div className="cvRightColumn">
        <AboutMe />
      </div>
    </div>
  );
}
