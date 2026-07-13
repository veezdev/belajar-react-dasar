// Component to display a list of tasks
// props items: an array of task strings
function TugasList({ items }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TugasList;
