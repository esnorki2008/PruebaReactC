//Import Components
import React from "react";
//Import Style
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:""}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="card text-center Form">
        <div className="card-header">Formulario Usuarios</div>
        <div className="card-body">
          <div className="Form-input">
            <label>Email address</label>
            <input
              value={this.state.value} onChange={this.handleChange} 
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="card-footer text-muted">
          <button onClick={this.handleSubmit} className="btn btn-outline-secondary">
            Crear Nuevo Registro
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
