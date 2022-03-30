import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//Components
import Form from "../components/Form";
import Table from "../components/Table";
// Services
import UsuarioService from "../services/UsuarioService";

class Usuario extends React.Component {
  constructor(props) {
    super(props);
    this.state = { retrievedRecords: [] };

    this.onFormClick = this.onFormClick.bind(this);
    this.usuarioForm = this.createNewForms();

    this.tableHeader = ["cui", "nombres", "apellidos", "edad"];
  }

  createNewForms(){
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

  fetchNewData(){
    UsuarioService.getAll()
      .then((res) => {
        let mappedRecords = this.mapRetrievedRecords(res, this.tableHeader);
        this.setState({ ...this.state, retrievedRecords: mappedRecords });
      })
      .catch(() => {
        this.setState({ ...this.state,retrievedRecords: [] });
        this.errorMessage("error al obtener la información")        
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
    }).then(() => {
        this.okMessage("El registro ha sido guardado");
        this.fetchNewData();
      })
      .catch(() => {
        this.errorMessage("Error al guardar el registro");
      });
  };

  onItemDelete(idToDelete){
    UsuarioService.delete(idToDelete).then(()=>{
      this.okMessage("El registro ha sido eliminado");
        this.fetchNewData();
    }).catch(() => {
      this.errorMessage("Error al eliminar el registro");
    });
  }

  okMessage(title){
    Swal.fire({position: 'top-end',icon: 'success',title: title,showConfirmButton: false,timer: 1500})
  }

  errorMessage(title){
    Swal.fire({position: 'top-end',icon: 'error',title: title,showConfirmButton: false,timer: 1500})
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-3 ">
            <Form
              handleFormClick={this.onFormClick}
              formData={this.usuarioForm}
            />
          </div>
          <div className="col-sm-9">
            <Table
              onEdit={(itemToUpdate)=>{console.log(itemToUpdate)}}
              onDelete={(itemToDelete)=>{this.onItemDelete(itemToDelete)}}
              tableRecords={this.state.retrievedRecords}
              tableHeader={this.tableHeader}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Usuario;
