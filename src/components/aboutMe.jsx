import { Component } from "react";
import { SectionHeader } from "./boilerplate";
import { MultilineEditable } from "./editableComponent";

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMe">
        <SectionHeader className="aboutMeHeader" defaultValue="About Me" />
        <MultilineEditable
          className="aboutMeText"
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae efficitur odio. Ut fringilla, neque sed eleifend semper, sem eros fermentum velit, vehicula lobortis lacus tellus at ante. Nunc eget libero sem."
        />
      </div>
    );
  }
}

export default AboutMe;
