//Import Style
import "./Appbar.css";

export default function Appbar(props) {
  let onViewChanged = (selectedView) => {
    props.selectedView(selectedView);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="row Appbar">
        <div className="col-md-4  mb-0 h5" href="#">
          Prueba React
        </div>
        <div className="col-md-8">
          <div className="row d-flex justify-content-end">
            <button
              onClick={() => onViewChanged("usuarios")}
              className="col-sm-2 btn Appbar-button btn-outline-secondary "
              type="submit"
            >
              Usuarios
            </button>
            <button
              onClick={() => onViewChanged("cursos")}
              className="col-sm-2 btn Appbar-button btn-outline-secondary "
              type="submit"
            >
              Cursos
            </button>
            <button
              onClick={() => onViewChanged("asignaciones")}
              className="col-sm-2 btn Appbar-button btn-outline-secondary  "
              type="submit"
            >
              Asignaciones
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
