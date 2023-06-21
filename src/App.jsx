import { Component } from "react";
import { Navbar, Footer } from "./components/boilerplate.jsx";
import Cv from "./components/cv.jsx";
import { AddBtnSet } from "./components/addElementBtn.jsx";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      educationalExperience: {
        major: "",
        institution: "",
        years: "",
        id: uniqid(),
        count: 0,
      },
      education: [],
      references: 1,
      workExperience: 1,
      skills: 1,
    };

    this.incValue = this.incValue.bind(this);
    this.decValue = this.decValue.bind(this);
  }

  incValue(valueToUpdate, argToStore) {
    console.log(this.state.education);

    this.setState({
      [argToStore]: this.state[argToStore].concat(this.state[valueToUpdate]),
      [valueToUpdate]: {
        major: "",
        institution: "",
        years: "",
        count: this.state[valueToUpdate].count + 1,
        id: uniqid(),
      },
    });
    console.log("adding element");
    console.log(this.state.educationalExperience);
    console.log(this.state.education);
  }

  decValue(valueToUpdate, argToStore) {
    if (this.state[valueToUpdate].count > 0) {
      this.setState({
        [argToStore]: this.state[argToStore].filter(
          (_, i) => i !== this.state[valueToUpdate].count - 1
        ),
        [valueToUpdate]: {
          count: this.state[valueToUpdate].count - 1,
          id: uniqid(),
        },
      });
      console.log("removing element");
      console.log(this.state.educationalExperience);
      console.log(this.state.education);
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <Cv education={this.state.education} />
        <div className="add-btn-wrapper flexrow">
          <AddBtnSet
            textValue={"Education " + this.state.educationalExperience.count}
            incValue={() => this.incValue("educationalExperience", "education")}
            decValue={() => this.decValue("educationalExperience", "education")}
          />
          <AddBtnSet
            textValue={"References " + this.state.references}
            incValue={() => this.incValue("references")}
            decValue={() => this.decValue("references")}
          />
          <AddBtnSet
            textValue={"Work Experience " + this.state.workExperience}
            incValue={() => this.incValue("workExperience")}
            decValue={() => this.decValue("workExperience")}
          />
          <AddBtnSet
            textValue={"Skills " + this.state.skills}
            incValue={() => this.incValue("skills")}
            decValue={() => this.decValue("skills")}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
