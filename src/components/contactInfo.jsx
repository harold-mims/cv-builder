/* eslint-disable react/prop-types */
import { MultilineEditable } from "./editableComponent";

function ContactInfo({ contactMethod, defaultValue }) {
  return (
    <div className="contactInfoWrapper">
      <div className="contactMethodWrapper">
        <div className="contactAccent"></div>
        <p className="contactMethod">{contactMethod}</p>
      </div>
      <MultilineEditable className="contactInfo" defaultValue={defaultValue} />
    </div>
  );
}

export default ContactInfo;
