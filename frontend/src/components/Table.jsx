import React from "react";
//Import Style
import "./Table.css";
//Components
import TableBody from "./TableBody";
export default function Table(props) {
  return (
    <div className="card text-center  Table">
      <div className="card-header"> Resultados Para Usuarios</div>
      <div className="card-body table-responsive">
        <div className=" tablescroll">
          <table className="table table-hover ">
            <thead>
              <tr>
                {props.tableHeader ? (
                  props.tableHeader.map((header, index) => (
                    <th key={index} className="Table-header" scope="col">
                      {header}
                    </th>
                  ))
                ) : (
                  <div></div>
                )}
                <th className="Table-header" scope="col">
                  Eliminar
                </th>
                <th className="Table-header" scope="col">
                  Modificar
                </th>
              </tr>
            </thead>
            <tbody>
              {props.tableRecords.map((value, index) => {
                return (
                  <TableBody
                    onEdit={() => {
                      props.onEdit(value);
                    }}
                    onDelete={() => {
                      props.onDelete(value[0]);
                    }}
                    key={index}
                    value={value}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
