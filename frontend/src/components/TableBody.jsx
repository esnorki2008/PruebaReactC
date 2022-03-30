import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBan,faPencil } from "@fortawesome/free-solid-svg-icons";

//Import Style
import "./TableBody.css";
export default function TableBody(props) {
  let value = props.value;
  library.add(faBan,faPencil);
  return (
    <tr key={value.cui}>
      {value.map((field, index) => {
        return index !== 0 ? (
          <td key={index}>{field}</td>
        ) : (
          <th key={index} scope="row">
            {field}
          </th>
        );
      })}
      <td onClick={props.onDelete} className="tableBody-button">
        <FontAwesomeIcon icon="ban"  />
      </td>
      <td onClick={props.onEdit} className="tableBody-button">
        <FontAwesomeIcon icon="pencil" />
      </td>
    </tr>
  );
}
