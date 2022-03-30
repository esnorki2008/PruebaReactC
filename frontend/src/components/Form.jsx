//Import Components
import React from "react";
//Import Style
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.formData };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, indexInput) {
    this.setState({
      value: this.state.value.map((value, index) => {
        if (index != indexInput) return value;
        return { ...value, inputValue: event.target.value };
      }),
    });
  }

  handleSubmit() {
    this.props.handleFormClick(this.state.value);
  }

  render() {
    return (
      <div className="card text-center Form">
        <div className="card-header">Formulario Usuarios</div>
        <div className="card-body">
          {this.props.formData.map((item, i) => {
            return (
              <div key={i} className="Form-input">
                <label>{item.inputTitle}</label>
                <input
                  value={this.state.inputValue}
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
            Crear Nuevo Registro
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
