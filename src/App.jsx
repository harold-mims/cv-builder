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
      individualReference: {
        refName: "",
        position: "",
        contact: "",
        id: uniqid(),
        count: 0,
      },
      references: [],
      workExperience: {
        years: "",
        position: "",
        company: "",
        description: "",
        id: uniqid(),
        count: 0,
      },
      workHistory: [],
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
        count: this.state[valueToUpdate].count + 1,
        id: uniqid(),
      },
    });
    console.log("adding element");
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
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <Cv
          education={this.state.education}
          references={this.state.references}
          workHistory={this.state.workHistory}
        />
        <div className="add-btn-wrapper flexrow">
          <AddBtnSet
            textValue={"Education " + this.state.education.length}
            incValue={() => this.incValue("educationalExperience", "education")}
            decValue={() => this.decValue("educationalExperience", "education")}
          />
          <AddBtnSet
            textValue={"References " + this.state.references.length}
            incValue={() => this.incValue("individualReference", "references")}
            decValue={() => this.decValue("individualReference", "references")}
          />
          <AddBtnSet
            textValue={"Work Experience " + this.state.workHistory.length}
            incValue={() => this.incValue("workExperience", "workHistory")}
            decValue={() => this.decValue("workExperience", "workHistory")}
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
