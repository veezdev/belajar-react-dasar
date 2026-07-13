import Kegiatan from "./Kegiatan";

// List kegiatan component
function ListKegiatan2() {
  /**
   * multiple data collection
   * for rendering multiple data collection, we can use map function to iterate the data and render the component
   * based on the data collection, we can render the component with the data passed as props
   *
   * for id a lot of developer using id from database, for this case we can use id in key object
   */

  const data = [
    { id: 1, text: "Belajar React", isCompleted: true },
    { id: 2, text: "Membuat Aplikasi React", isCompleted: false },
    {
      id: 3,
      text: "Deploy Aplikasi React",
      isCompleted: false,
      isDelete: true,
    },
    { id: 4, text: "Mendapatkan Feedback", isCompleted: true },
  ];

  // opsi 2: render component with map function inside the return statement
  return (
    <>
      <h1>List Kegiatan 2</h1>
      <ul>
        {data.map((todo) => (
          <Kegiatan
            key={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            isDelete={todo.isDelete}
          />
        ))}
      </ul>
    </>
  );
}

export default ListKegiatan2;
