import { Component } from "react";

// https://www.freepik.com/free-psd/clean-modern-resume-cv-template_14721872.htm#query=cv%20template&position=0&from_view=keyword&track=ais

class AddElementBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    };
  }

  /*onEdit = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };*/

  updateValue(valueToUpdate) {
    console.log(valueToUpdate);
    console.log("clicked");
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { textValue, className, onClick } = this.props;

    return (
      <button className={"addElementBtn " + className} onClick={onClick}>
        {textValue}
      </button>
    );
  }
}

class AddBtnSet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    };
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { className, textValue, incValue, decValue } = this.props;

    return (
      <div className={"btnWrapper flexcol"}>
        <AddElementBtn
          className={className}
          textValue={"Add " + textValue}
          onClick={incValue}
        />
        <AddElementBtn
          className={className}
          textValue={"Remove " + textValue}
          onClick={decValue}
        />
      </div>
    );
  }
}

export { AddElementBtn, AddBtnSet };
