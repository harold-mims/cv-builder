import { Component } from "react";

// https://www.freepik.com/free-psd/clean-modern-resume-cv-template_14721872.htm#query=cv%20template&position=0&from_view=keyword&track=ais

class AddElementBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    };
  }

  onEdit = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { defaultValue, textValue, className } = this.props;

    return (
      <input
        className={"inlineEditable " + className}
        onChange={this.onEdit}
        value={textValue}
        placeholder={defaultValue}
      />
    );
  }
}

export default AddElementBtn;