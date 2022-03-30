import React from "react";
//Components
import Form from "../components/Form";
import Table from "../components/Table";

class Usuario extends React.Component {
  constructor(props) {
    super(props);
    this.onFormClick = this.onFormClick.bind(this);
    this.usuarioForm = [
      {
        inputTitle: "CUI",
        inputPlaceholder: "Ingrese CUI",
        inputValue: "",
      },
      {
        inputTitle: "Nombres Completos",
        inputPlaceholder: "Ingrese Nombres",
        inputValue: "",
      },
    ];
  }

  onFormClick = (formListValue) => {
    console.log({ misnuevos: formListValue });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3 ">
            <Form handleFormClick={this.onFormClick} formData={this.usuarioForm} />
          </div>
          <div className="col-sm-9">
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default Usuario;
