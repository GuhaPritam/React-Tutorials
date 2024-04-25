import { useState, useMemo } from 'react';

const MyComponent = () => {
  const [data, setData] = useState([]);

  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return data.reduce((acc, curr) => acc + curr, 0);
  }, [data]);

  return (
    <div>
      <button onClick={() => setData([1, 2, 3, 4, 5])}>Set Data</button>
      <h2>Sum: {sum}</h2>
    </div>
  );
};

export default MyComponent;
