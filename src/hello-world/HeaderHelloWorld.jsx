const HeaderHelloWorld = (props) => {
  // we can create script js in component
  // and using it in jsx component (only for attribute and text)
  // props is a object so we can put any key attribute like props.content (content is key attribute that we use in parent component)
  const text = props.content;

  // we can also create object for style in jsx component
  const styleText = {
    color: "rebeccapurple",
    fontSize: "30px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
  };
  return (
    <div>
      <h1 style={styleText}>{text.toUpperCase()}</h1>
    </div>
  );
};

export default HeaderHelloWorld;
