import { useImmer } from "use-immer";
import TugasForm from "./TugasForm";
import TugasList from "./TugasList";

// Sharing state component remember parent -> children
// the data will sharing with 2 or more state
function Tugas() {
  const [items, setItems] = useImmer([]);

  // handleSubmit function to add new task to the items state
  // we will use the setItems function to add the new task to the items array, we will use the draft parameter to access the current state of the items array
  // draft is a temporary copy of the current state, we can modify it directly and immer will take care of creating a new state based on the changes we made to the draft
  const handleSubmit = (item) => {
    setItems((draft) => {
      draft.push(item);
    });
  };

  return (
    <div>
      {/* Form to add new tasks */}
      {/* onSubmit={handleSubmit} is a props for passing the submit handler to the component */}
      <TugasForm onSubmit={handleSubmit} />

      {/* Component to display the list of tasks */}
      {/* items= is a props from TugasList component */}
      {/* ={items} is a state useImmer for passing the array of tasks to the component */}
      <TugasList items={items} />
    </div>
  );
}

export default Tugas;
