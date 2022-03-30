import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//Components
import Form from "../components/Form";
import Table from "../components/Table";
//Style
import "./Curso.css";
// Services
import CursoService from "../services/CursoService";
import Modal from "../components/Modal";

class Curso extends React.Component {
  constructor(props) {
    super(props);
    this.state = { retrievedRecords: [], recordEdit: null };

    this.onFormClick = this.onFormClick.bind(this);
    this.CursoForm = this.createNewForms();

    this.tableHeader = ["codigo", "nombre", "descripcion"];
  }

  createNewForms() {
    return [
      {
        inputTitle: "Codigo del curso",
        inputPlaceholder: "Ingrese Codigo",
      },
      {
        inputTitle: "Nombre del curso",
        inputPlaceholder: "Ingrese nombre",
      },
      {
        inputTitle: "Descripcion del curso",
        inputPlaceholder: "Ingrese descripcion",
      }
    ];
  }

  componentDidMount() {
    this.fetchNewData();
  }

  fetchNewData() {
    CursoService.getAll()
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
    CursoService.create({
      codigo: formListValue[0],
      nombre: formListValue[1],
      descripcion: formListValue[2],
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
        CursoService.delete(idToDelete)
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
        CursoService.update(newContent[0], {
          nombre: newContent[1],
          descripcion: newContent[2],
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
              handleFormClick={this.onFormClick}
              formData={this.CursoForm}
              title="Formulario Cursos"
              buttonText="Crear Nuevo Registro"
            />
          </div>
          <div className="col-sm-9">
            <Table
              title="Cursos"
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
        <div className="Curso-modal">
          {this.state.recordEdit ? (
            <Modal
              onCancel={() => {
                this.onModalCancel();
              }}
              onEdit={(newContent) => {
                this.onModalEdit(newContent);
              }}
              values={this.state.recordEdit}
              title="Editar Campos Curso"
              subtitle="CUI Del Curso:"
              formTitle="Edicion Curso"
              formButtonText="EditarCurso"
              formData={this.CursoForm.slice(1)}
            />
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

export default Curso;
