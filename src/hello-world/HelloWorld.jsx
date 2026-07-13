import HeaderHelloWorld from "./HeaderHelloWorld";

// React Component Hello World
const HelloWorld = () => {
  const props = {
    text: "Hello World",
    content: "Selamat belajar ReactJS dasar yaa :)",
  };

  return (
    <div>
      {/* Use HeaderHelloWorld from other file and ParagraphHelloWorld in one component */}
      {/* props from parent -> child */}

      {/* Regular Props  */}
      <HeaderHelloWorld content={"Hello Pizza"} />
      <ParagraphHelloWorld content={"Selamat belajar ReactJS dasar yaa :)"} />

      {/* Default props (didn't send props from parent component) */}
      <ParagraphHelloWorldSecond />

      {/* spread syntax from props constant in HelloWorld scope and using it */}
      <ParagraphHelloWorldThird {...props} />
    </div>
  );
};

// we can create multiple component in one file
export const ParagraphHelloWorld = ({ content }) => {
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
        {/* Use content prop in component text */}
        {content.toLowerCase()}
      </p>
    </div>
  );
};

// we can create default value for props in component like this and if the parent component didn't send the props to child component, the default value will be used
export const ParagraphHelloWorldSecond = ({
  content = "Ups lupa kasih content nih",
}) => {
  return (
    <div>
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          color: "darkslategray",
        }}
      >
        {content.toLowerCase()}
      </p>
    </div>
  );
};

// we can also create multiple props in one component and using it in jsx component
// either using props object or destructuring props in parameter function
export const ParagraphHelloWorldThird = ({ text, content }) => {
  return (
    <div>
      <p
        style={{
          fontFamily: "Arial, sans-serif",
          fontSize: "16px",
          color: "darkslategray",
        }}
      >
        {text.toLowerCase()} - {content.toLowerCase()}
      </p>
    </div>
  );
};

export default HelloWorld;
