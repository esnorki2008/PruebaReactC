export default function TableBody(props) {
  let value = props.value;
  return (
    <tr key={value.cui}>
      {value.map((field, index) => {
        return index !== 0 ? (
          <td key={field}>{field}</td>
        ) : (
          <th key={field} scope="row">{field}</th>
        );
      })}
    </tr>
  );
}
