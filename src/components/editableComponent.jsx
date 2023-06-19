import { Component } from "react";

// https://www.emgoto.com/react-inline-edit/
// https://www.freepik.com/free-psd/clean-modern-resume-cv-template_14721872.htm#query=cv%20template&position=0&from_view=keyword&track=ais

class InlineEditable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textValuealue: '',
        };
    }

    onEdit = (e) => {
        this.setState ({
            textValue: e.target.value
            
        });
        console.log(e)
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const {textValue} = this.props;

        return(
            <input 
                className="inlineEditable"
                onChange={this.onEdit}
                value={textValue}
            />
        );
    }

}

class MultilineEditable extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textValuealue: '',
        };
    }

    onEdit = (e) => {
        this.setState ({
            textValue: e.target.value
            
        });
        console.log(e)
    }

    render() {
        // eslint-disable-next-line react/prop-types
        const {textValue} = this.props;

        return(
            <textarea 
                rows={1}
                className="multilineEditable"
                onChange={this.onEdit}
                value={textValue}
            />
        );
    }

}
export { InlineEditable, MultilineEditable,}