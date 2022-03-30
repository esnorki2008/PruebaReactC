//Import Style
import "./Modal.css";
import Form from "./Form";
export default function Modal(props) {
  let exitModal = () => {
    props.onCancel();
  };

  return (
    <div>
      <div className="Modal" onClick={exitModal}>
        
      </div>
      <div className="Modal-body row">
          <div className="card col-sm-12 Modal-body-card">
            <div className="row">
              <div className="col-sm-6">
                <div className="card-body" >
                  <h5 className="card-title mb-4">{props.title}</h5>
                  <h6 className="card-subtitle  text-muted">
                    {props.subtitle}
                  </h6>
                  <p className="card-text">{props.values[0]}</p>
                  
                </div>
              </div>
              <div className="col-sm-6">
                <Form
                  values={props.values.slice(1)}
                  handleFormClick={(valor)=>{ props.onEdit([props.values[0],...valor])}}
                  formData={props.formData}
                  title={props.formTitle}
                  buttonText={props.formButtonText}
                ></Form>
              </div>
            </div>
            <button
                    onClick={exitModal}
                    className="btn btn-outline-secondary"
                  >Cancelar</button>
          </div>
        </div>
    </div>
  );
}
