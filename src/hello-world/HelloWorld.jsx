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
  return (
    <div>
      <p>Selamat belajar react dasar</p>
    </div>
  );
};

export default HelloWorld;
