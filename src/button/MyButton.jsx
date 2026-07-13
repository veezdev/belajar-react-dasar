// read event handler from props
// commonly use onXXX like onSmash, onRender, etc
function MyButton({ text, onSmash }) {
  return <button onClick={onSmash}>{text}</button>;
}

export default MyButton;
