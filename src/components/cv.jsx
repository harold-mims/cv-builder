import { Component } from "react";
import AboutMe from "./aboutMe";
import ContactInfo from "./contactInfo";
import NameTitle from "./nameTitle";
import { ChangableImage } from "./editableComponent";
// eslint-disable-next-line no-unused-vars
import Education from "./education";

class Cv extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { education } = this.props;

    return (
      <div className="cv-wrapper">
        <div className="cvLeftColumn">
          <ChangableImage src="../../public/placeholder_icon.jpg" />
          <Education education={education}/>
          <div className="contactWrapper">
            <ContactInfo
              contactMethod="Phone"
              defaultValue="+1 (555) 555-5555"
            />
            <ContactInfo
              contactMethod="Email"
              defaultValue="example@email.com"
            />
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
}

export default Cv;
