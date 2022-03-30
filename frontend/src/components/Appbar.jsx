//Import Style
import "./Appbar.css";

export default function Appbar() {
    return (
      <nav className="navbar navbar-light bg-light">
          <div className="row Appbar">
            <div className="col-md-4  mb-0 h5" href="#">Prueba React</div>
            <div className="col-md-8">
                <div className="row d-flex justify-content-end">
                  <button className="col-sm-2 btn Appbar-button btn-outline-secondary " type="submit">
                    Usuarios
                  </button>
                  <button className="col-sm-2 btn Appbar-button btn-outline-secondary " type="submit">
                    Cursos
                  </button>
                  <button className="col-sm-2 btn Appbar-button btn-outline-secondary  " type="submit">
                    Asignaciones
                  </button>
                </div>

            </div>
          </div>
          
      </nav>
    );
  }