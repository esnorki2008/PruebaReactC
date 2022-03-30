import React from "react";
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
    this.tableHeader = ["cui","nombres","apellidos","edad"]
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
      {
        inputTitle: "Apellidos Completos",
        inputPlaceholder: "Ingrese Apellido",
        inputValue: "",
      },
      {
        inputTitle: "Edad Actual",
        inputPlaceholder: "Ingrese Edad",
        inputValue: "",
      }
    ];
    
  }

  componentDidMount() {
    UsuarioService.getAll()
      .then((res) => {
        let mappedRecords = this.mapRetrievedRecords(res,this.tableHeader);
        this.setState({retrievedRecords:mappedRecords});
      })
      .catch(() => {
        this.setState({ retrievedRecords: [] });
      });
  }

  mapRetrievedRecords(recordsArray,headersArray){
    let recordsList = []
    recordsArray.forEach(record=>{
      let objectList = []
      headersArray.forEach(header=>{
        objectList.push(record[header])
      })
      recordsList.push(objectList)
    })

    return recordsList;
  }


  onFormClick = (formListValue) => {
    UsuarioService.create({
      cui:formListValue[0].inputValue,
      nombres:formListValue[1].inputValue,
      apellidos:formListValue[2].inputValue,
      edad:formListValue[3].inputValue
    }).then(response=>{
      console.log("creado")
    }).catch(()=>{
      console.log("error al crear")
    })
  };

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
