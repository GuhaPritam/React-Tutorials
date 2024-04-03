import { useState } from 'react';
import Button from '@mui/material/Button';
import { Data } from './Data';

const ChangingButtonTitle = () => {
    const [text, setText] = useState({})

    const handleClick = (index) => {
        setText(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    }

    return (
        <div className="flex justify-center items-center h-screen space-x-5">
            {Data.map((element, index) => (
                <Button key={index} variant="contained" color="primary" onClick={() => handleClick(index)}>
                    {text[index] ? element.b : element.a}
                </Button>
            ))}
        </div>
    );
}

export default ChangingButtonTitle;
