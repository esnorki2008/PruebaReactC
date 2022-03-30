export default function TableBody(props) {
  let value = props.value;
  return (
    <tr key={value.cui}>
      {value.map((field, index) => {
        return index !== 0 ? (
          <td key={index}>{field}</td>
        ) : (
          <th key={index} scope="row">{field}</th>
        );
      })}
    </tr>
  );
}
