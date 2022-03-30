//Import Components
import React from "react";
//Import Style
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    if(props.values) this.state = { value: props.values };
    else this.state = { value: new Array( props.formData.length ).fill("") };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, indexInput) {
    this.setState({
      value: this.state.value.map((value, index) => {
        if (index != indexInput) return value;
        return event.target.value ;
      }),
    });
  }

  handleSubmit() {
    let oldState = this.state.value
    this.props.handleFormClick(oldState);
    if(!this.props.values)this.setState({ value: new Array( this.props.formData.length ).fill("")  });
  }

  render() {
    return (
      <div className="card text-center Form">
        <div className="card-header">{this.props.title}</div>
        <div className="card-body">
          {this.props.formData.map((item, i) => {
            return (
              <div key={i} className="Form-input">
                <label>{item.inputTitle}</label>
                <input
                  value={this.state.value[i]}
                  onChange={(event) => this.handleChange(event, i)}
                  type="text"
                  className="form-control"
                  placeholder={item.inputPlaceholder}
                />
              </div>
            );
          })}
        </div>
        <div className="card-footer text-muted">
          <button
            onClick={this.handleSubmit}
            className="btn btn-outline-secondary"
          >
            {this.props.buttonText}
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
