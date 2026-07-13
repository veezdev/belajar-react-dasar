// Todo kegiatan component
function Kegiatan({ text, isDelete = false, isCompleted }) {
  if (isDelete) {
    return null;
  } else {
    return (
      <li>
        {text} {isCompleted && "✅"}
      </li>
    );
  }
}

export default Kegiatan;
