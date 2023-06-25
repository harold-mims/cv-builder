import { MultilineEditable } from "./editableComponent";

function NameTitle() {
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

export default NameTitle;
