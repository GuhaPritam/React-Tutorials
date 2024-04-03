import { useState } from 'react';

// Define a functional component
function ClickableButton() {
  //Set the default value false so bg should be white
  const [clicked, setClicked] = useState(false);

  //Create one function for giving the true and false
  const handleClick = () => {
    setClicked(!clicked); // Toggle the 'clicked' state between true and false
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
        Click me
      </button>
      <div className={`mt-4 p-4 ${clicked ? 'bg-blue-200' : ''}`}>
        Background color changes after click!
      </div>
    </div>
  );
}

export default ClickableButton;
