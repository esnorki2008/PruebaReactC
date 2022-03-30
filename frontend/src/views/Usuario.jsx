import React from "react";
import Swal from "sweetalert2";
//Components
import Form from "../components/Form";
import Table from "../components/Table";
//Style
import "./Usuario.css";
// Services
import UsuarioService from "../services/UsuarioService";
import Modal from "../components/Modal";

class Usuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { retrievedRecords: [], recordEdit: null };

    this.onFormClick = this.onFormClick.bind(this);
    this.usuarioForm = this.createNewForms();

    this.tableHeader = ["cui", "nombres", "apellidos", "edad"];
  }

  createNewForms() {
    return [
      {
        inputTitle: "CUI",
        inputPlaceholder: "Ingrese CUI",
      },
      {
        inputTitle: "Nombres Completos",
        inputPlaceholder: "Ingrese Nombres",
      },
      {
        inputTitle: "Apellidos Completos",
        inputPlaceholder: "Ingrese Apellido",
      },
      {
        inputTitle: "Edad Actual",
        inputPlaceholder: "Ingrese Edad",
      },
    ];
  }

  componentDidMount() {
    this.fetchNewData();
  }

  fetchNewData() {
    UsuarioService.getAll()
      .then((res) => {
        let mappedRecords = this.mapRetrievedRecords(res, this.tableHeader);
        this.setState({ ...this.state, retrievedRecords: mappedRecords });
      })
      .catch(() => {
        this.setState({ ...this.state, retrievedRecords: [] });
        this.errorMessage("error al obtener la información");
      });
  }

  mapRetrievedRecords(recordsArray, headersArray) {
    let recordsList = [];
    recordsArray.forEach((record) => {
      let objectList = [];
      headersArray.forEach((header) => {
        objectList.push(record[header]);
      });
      recordsList.push(objectList);
    });

    return recordsList;
  }

  onFormClick = (formListValue) => {
    UsuarioService.create({
      cui: formListValue[0],
      nombres: formListValue[1],
      apellidos: formListValue[2],
      edad: formListValue[3],
    })
      .then(() => {
        this.okMessage("El registro ha sido guardado");
        this.fetchNewData();
      })
      .catch(() => {
        this.errorMessage("Error al guardar el registro");
      });
  };

  onItemDelete(idToDelete) {
    Swal.fire({
      title: "El registro será eliminado",
      text: "no se podrá recuperar la información",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        UsuarioService.delete(idToDelete)
          .then(() => {
            this.okMessage("El registro ha sido eliminado");
            this.fetchNewData();
          })
          .catch(() => {
            this.errorMessage("Error al eliminar el registro");
          });
      }
    });
  }

  okMessage(title) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: title,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  errorMessage(title) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: title,
      showConfirmButton: false,
      timer: 1500,
    });
  }

  onModalCancel() {
    this.setState({ ...this.state, recordEdit: null });
  }

  onModalEdit(newContent) {
    Swal.fire({
      title: "El registro será actualizado",
      text: "no se podrá recuperar la información",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, Actualizar!",
    }).then((result) => {
      if (result.isConfirmed) {
        UsuarioService.update(newContent[0], {
          nombres: newContent[1],
          apellidos: newContent[2],
          edad: newContent[3],
        })
          .then(() => {
            this.okMessage("El registro ha sido actualizado");
            this.fetchNewData();
            this.onModalCancel();
          })
          .catch(() => {
            this.errorMessage("Error al actualizar el registro");
          });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3 ">
            <Form
              resetDataOnSubmit={true}
              handleFormClick={this.onFormClick}
              formData={this.usuarioForm}
              title="Formulario Usuarios"
              buttonText="Crear Nuevo Registro"
            />
          </div>
          <div className="col-sm-9">
            <Table
              title="Usuarios"
              onEdit={(itemToUpdate) => {
                this.setState({ ...this.state, recordEdit: itemToUpdate });
              }}
              onDelete={(itemToDelete) => {
                this.onItemDelete(itemToDelete);
              }}
              tableRecords={this.state.retrievedRecords}
              tableHeader={this.tableHeader}
            />
          </div>
        </div>
        <div className="Usuario-modal">
          {this.state.recordEdit ? (
            <Modal
              onCancel={() => {
                this.onModalCancel();
              }}
              onEdit={(newContent) => {
                this.onModalEdit(newContent);
              }}
              values={this.state.recordEdit}
              title="Editar Campos Usuario"
              subtitle="CUI Del Usuario:"
              formTitle="Edicion Usuario"
              formButtonText="EditarUsuario"
              formData={this.usuarioForm.slice(1)}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default Usuario;
