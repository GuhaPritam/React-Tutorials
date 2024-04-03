import { useState } from 'react';
import Button from '@mui/material/Button';

const Practice2 = () => {
    const [value, setValue] = useState('');
    const [bgColor, setBgColor] = useState('bg-gray-700');

    const convertUppercase = () => {
        setValue(value.toUpperCase());
    };

    const convertLowercase = () => {
        setValue(value.toLowerCase());
    };

    const clearText = () => {
        setValue('');
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const changeColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        setBgColor(randomColor);
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center bg-gray-700'>
            <textarea 
                className={`w-[40%] h-40 p-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none resize-none ${bgColor}`} 
                style={{ backgroundColor: bgColor }}
                value={value} 
                onChange={handleChange} 
            />
            <div className='flex gap-2 p-3'>
                <Button variant="contained" color="primary" onClick={convertUppercase}>Convert Uppercase</Button>
                <Button variant="contained" color="primary" onClick={convertLowercase}>Convert Lowercase</Button>
                <Button variant="contained" color="primary" onClick={clearText}>Clear</Button>
                <Button variant="contained" color="primary" onClick={changeColor}>Change Color</Button>
            </div>
        </div>
    );
}

export default Practice2;
