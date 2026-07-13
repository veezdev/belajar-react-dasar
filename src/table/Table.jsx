import Row from "./Row";

const Table = () => {
  return (
    <>
      <h1>Table User</h1>
      <table border="1">
        <tbody>
          <Row id="1" name="John Doe" email="john.doe@example.com" />
          <Row id="2" name="Jane Smith" email="jane.smith@example.com" />
          <Row id="3" name="Bob Johnson" email="bob.johnson@example.com" />
        </tbody>
      </table>
    </>
  );
};

export default Table;
