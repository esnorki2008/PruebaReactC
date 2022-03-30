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
              </tr>
            </thead>
          </table>
          <div className=" tablescroll">
            <table className="table table-hover ">
              <tbody>
                {props.tableRecords.map((value,index) => {
                  return( 
                    <TableBody key={index} value={value}/>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
