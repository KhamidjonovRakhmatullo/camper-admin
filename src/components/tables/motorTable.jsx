import Table from "@mui/joy/Table";
import Button from "@mui/joy/Button";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TableHover() {
  return (
    <Table hoverRow>
      <thead>
        <tr>
          <th style={{ width: "5%" }}>No</th>
          <th>Name</th>
          <th>Location</th>
          <th>People</th>
          <th>License</th>
          <th>Price</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.name}>
            <td>{Math.ceil(Math.random()*10)}</td>
            <td>Name</td>
            <td>Seoul</td>
            <td>{Math.ceil(Math.random()*10)} </td>
            <td>{Math.ceil(Math.random()*6)} year</td>
            <td>{Math.ceil(Math.random()*10000)} $</td>
            <td>
              <Button variant="outlined" color="primary" size="md">
                Edit
              </Button>
            </td>
            <td>
              <Button variant="outlined" color="danger" size="md">
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
