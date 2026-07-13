import Kegiatan from "./Kegiatan";

// List kegiatan component
function ListKegiatan() {
  /**
   * multiple data collection
   * for rendering multiple data collection, we can use map function to iterate the data and render the component
   * based on the data collection, we can render the component with the data passed as props
   *
   * for id a lot of developer using id from database, for this case we can use id in key object
   * if we don't have key in the props child it will warning but not error see the console. For solve this error please look at the ListKegiatan2.jsx file for the solution
   */

  const data = [
    {
      text: "Belajar React",
      isCompleted: true,
      isDelete: false,
    },
    {
      text: "Membuat Aplikasi React",
      isCompleted: false,
      isDelete: false,
    },
    {
      text: "Deploy Aplikasi React",
      isCompleted: false,
      isDelete: true,
    },
    {
      text: "Mendapatkan Feedback",
      isCompleted: true,
      isDelete: false,
    },
  ];

  // opsi 1: render component with map function outside the return statement
  const renderKegiatan = data.map((todo) => (
    <Kegiatan
      key={todo.text}
      text={todo.text}
      isCompleted={todo.isCompleted}
      isDelete={todo.isDelete}
    />
  ));

  return (
    <>
      <h1>List Kegiatan</h1>
      <ul>{renderKegiatan}</ul>
    </>
  );
}

export default ListKegiatan;
