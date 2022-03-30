import React from "react";
import Swal from "sweetalert2";
//Components
import Form from "../components/Form";
import Table from "../components/Table";
//Style
import "./Asignacion.css";
// Services
import AsignacionService from "../services/AsignacionService";
import Modal from "../components/Modal";

class Asignacion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { retrievedRecords: [], recordEdit: null };

    this.onFormClick = this.onFormClick.bind(this);
    this.asignacionForm = this.createNewForms();

    this.tableHeader = ["codigoAsignacion", "nombres", "apellidos", "curso","descripcion"];
  }

  createNewForms() {
    return [
      {
        inputTitle: "CUI Usuario",
        inputPlaceholder: "Ingrese el CUI del usuario",
      },
      {
        inputTitle: "Codigo Curso",
        inputPlaceholder: "Ingrese Codigo Curso",
      }
    ];
  }

  componentDidMount() {
    this.fetchNewData();
  }

  fetchNewData() {
    AsignacionService.getAll()
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
    AsignacionService.create({
      usuario: formListValue[0],
      curso: formListValue[1],
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
        AsignacionService.delete(idToDelete)
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
        AsignacionService.update(newContent[0], {
          usuario: newContent[1],
          curso: newContent[2],
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
              formData={this.asignacionForm}
              title="Formulario Asignacions"
              buttonText="Crear Nuevo Registro"
            />
          </div>
          <div className="col-sm-9">
            <Table
              title="Asignacions"
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
        <div className="Asignacion-modal">
          {this.state.recordEdit ? (
            <Modal
              onCancel={() => {
                this.onModalCancel();
              }}
              onEdit={(newContent) => {
                this.onModalEdit(newContent);
              }}
              values={[this.state.recordEdit[0]]}
              title="Editar Campos Asignacion"
              subtitle="ID Del Asignacion:"
              formTitle="Edicion Asignacion"
              formButtonText="EditarAsignacion"
              formData={this.asignacionForm}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default Asignacion;
