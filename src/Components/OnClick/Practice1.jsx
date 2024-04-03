function ClickableButton() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>Click me</button>
  );
}

export default ClickableButton;
