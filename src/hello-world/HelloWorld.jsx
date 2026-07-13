import HeaderHelloWorld from "./HeaderHelloWorld";

// React Component Hello World
const HelloWorld = () => {
  return (
    <div>
      {/* Use HeaderHelloWorld from other file and ParagraphHelloWorld in one component */}
      <HeaderHelloWorld />
      <ParagraphHelloWorld />
    </div>
  );
};

// we can create multiple component in one file
export const ParagraphHelloWorld = () => {
  // script js in component and render in jsx component
  const text = "Selamat belajar react dasar semuanya";
  return (
    <div>
      <p
        // if we wanna create object attribute directly in tag we can put like this below
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          color: "darkslategray",
        }}
      >
        {text.toLowerCase()}
      </p>
    </div>
  );
};

export default HelloWorld;
