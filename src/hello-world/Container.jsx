// nested component
// we can create component in one file and use it in another component or root parent component
// remember for use children props this is reserved keyword that using for render any other component jsx inside the parent component
const Container = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Programmer Zaman Now</h1>
      </header>
      {/* for this render all component jsx in this section (between the header and footer) */}
      {children}
      <footer>
        <p>&copy; 2026 Programmer Zaman Now. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Container;
