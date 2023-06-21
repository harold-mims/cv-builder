import { Component } from "react";
import { MultilineEditable } from "./editableComponent";

class NameTitle extends Component {
  render() {
    return (
      <div className="nameTitle flexcol">
        <MultilineEditable
          className="name spacedLetters"
          defaultValue="First Name Last Name"
        />
        <MultilineEditable
          className="professionalTitle spacedLetters"
          defaultValue="Professional Title"
        />
      </div>
    );
  }
}

export default NameTitle;
