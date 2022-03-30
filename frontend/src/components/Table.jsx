//Import Components
import * as React from "react";
//Import Style
import "./Table.css";

function Table() {
  return (
    <div className="card text-center  Table">
      <div className="card-header"> Resultados Para Usuarios</div>
      <div className="card-body table-responsive">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
        </table>
        <div className=" tablescroll">
        <table className="table table-hover ">
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            
          </tbody>
        </table>
        </div>
        
      </div>
    </div>
  );
}

export default Table;
