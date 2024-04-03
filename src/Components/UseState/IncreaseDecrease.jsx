import { useState } from 'react';
import Button from '@mui/material/Button';

const IncreaseDecrease = () => {
  const [value, setValue] = useState(0); 

  const handleIncrease = () => {
    setValue(value + 1); 
  };

  const handleDecrease = () => {
    if (value > 0)
    setValue(value - 1); 
  };

  return (
    <div className='flex justify-center items-center h-screen gap-4'>
      <Button variant="contained" color="primary" onClick={handleIncrease}>+</Button>
      <span className="mx-2">{value}</span>
      <Button variant="contained" color="primary" onClick={handleDecrease}>-</Button>
    </div>
  );
}

export default IncreaseDecrease;
