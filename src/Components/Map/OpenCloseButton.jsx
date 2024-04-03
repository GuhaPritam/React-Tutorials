import { useState } from 'react';

const OpenCloseButton = () => {
  const [buttonTexts, setButtonTexts] = useState({ 0: false, 1: false, 2: false });
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setButtonTexts(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
    setClickedIndex(index);
  }

  return (
    <div className="p-4"> {/* Apply padding to the whole component */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick(0)}>
        {buttonTexts[0] ? 'Closed' : 'Open'}
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" onClick={() => handleClick(1)}>
        {buttonTexts[1] ? 'Closed' : 'Open'}
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleClick(2)}>
        {buttonTexts[2] ? 'Closed' : 'Open'}
      </button>
      <p className="mt-4">Clicked index: {clickedIndex !== null ? clickedIndex : 'None clicked'}</p>
    </div>
  );
}

export default OpenCloseButton;
