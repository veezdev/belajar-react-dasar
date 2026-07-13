function SearchForm() {
  // Handle the search button click event
  // if we didn't use event.preventDefault() in the onClick event handler,
  // the event will trigger the default form submission behavior and will reload the page.
  // so we need to use event.preventDefault() to prevent the default form submission behavior.
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log("Search button clicked");
  };

  return (
    <form>
      <input type="text" placeholder="Search..." />
      <button onClick={handleSearch}>Search</button>
    </form>
  );
}

export default SearchForm;
